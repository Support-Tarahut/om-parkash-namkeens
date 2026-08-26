// Vercel serverless function — verifies a Razorpay payment signature.
// Confirms the payment is genuine by recomputing HMAC-SHA256(order_id|payment_id, secret).
// Returns { verified: true } only on an exact, constant-time match.

const crypto = require('crypto');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
    body = body || {};

    const orderId = body.razorpay_order_id;
    const paymentId = body.razorpay_payment_id;
    const signature = body.razorpay_signature;
    if (!orderId || !paymentId || !signature) {
      return res.status(400).json({ verified: false, error: 'Missing payment fields.' });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      return res.status(500).json({ verified: false, error: 'Payment is not configured.' });
    }

    const expected = crypto.createHmac('sha256', secret)
      .update(orderId + '|' + paymentId)
      .digest('hex');

    const a = Buffer.from(expected);
    const b = Buffer.from(String(signature));
    const ok = a.length === b.length && crypto.timingSafeEqual(a, b);
    if (!ok) {
      return res.status(400).json({ verified: false, error: 'Signature mismatch.' });
    }

    return res.status(200).json({ verified: true });
  } catch (e) {
    return res.status(400).json({ verified: false, error: 'Verification error.' });
  }
};

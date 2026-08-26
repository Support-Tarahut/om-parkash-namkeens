// Vercel serverless function — creates a Razorpay order.
// Secret key is read from env (RAZORPAY_KEY_SECRET) and NEVER sent to the browser.
// Zero dependencies: uses native fetch (Node 18+) + Basic auth.

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
    body = body || {};

    const amount = parseInt(body.amount, 10);
    if (!Number.isFinite(amount) || amount < 100) {
      return res.status(400).json({ error: 'Invalid amount (minimum 100 paise).' });
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
      return res.status(500).json({ error: 'Payment is not configured.' });
    }

    const auth = Buffer.from(keyId + ':' + keySecret).toString('base64');
    const rzp = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: { 'Authorization': 'Basic ' + auth, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: amount,
        currency: 'INR',
        receipt: (body.receipt ? String(body.receipt).slice(0, 40) : ('rcpt_' + Date.now())),
        notes: { customer: String(body.name || ''), phone: String(body.phone || '') }
      })
    });

    const data = await rzp.json();
    if (!rzp.ok) {
      const code = rzp.status === 401 ? 401 : 500;
      return res.status(code).json({ error: 'Could not create payment order.', detail: (data.error && data.error.description) || '' });
    }

    // Return only what the browser needs — the public key_id, never the secret.
    return res.status(200).json({ order_id: data.id, amount: data.amount, currency: data.currency, key_id: keyId });
  } catch (e) {
    return res.status(500).json({ error: 'Server error creating order.' });
  }
};

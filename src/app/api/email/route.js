export async function POST(request) {
  try {
    const { to, subject, html } = await request.json();

    if (!to || !subject || !html) {
      return new Response(JSON.stringify({ error: 'Missing email parameters' }), { status: 400 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Dog Therapy Scheduler <noreply@scheduler.brightandbeautiful.org>',
        to,
        subject,
        html,
      }),
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: res.ok ? 200 : res.status });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}

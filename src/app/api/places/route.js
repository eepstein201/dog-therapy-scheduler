export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const input = searchParams.get('input');

  if (!input) {
    return new Response(JSON.stringify({ error: 'Input is required' }), { status: 400 });
  }

  // Proxy to Google Places Autocomplete API
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch places' }), { status: 500 });
  }
}

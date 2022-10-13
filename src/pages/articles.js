export async function get() {
    const responseData = await fetch(`https://swapi.dev/api/people/1`).json();
    return new Response(JSON.stringify(responseData), { status: 200 });
}
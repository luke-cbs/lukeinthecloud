import type { APIRoute } from "astro";


export const get: APIRoute = async ({ request }) => {
    const articlesResponse = await fetch(
        "https://dev.to/api/articles?username=codewithluke"
    );
    const articles = await articlesResponse.json();
    return new Response(JSON.stringify(articles), {
        status: 200
    })
}
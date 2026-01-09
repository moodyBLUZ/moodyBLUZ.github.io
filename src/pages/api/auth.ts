// src/pages/api/auth.ts
export async function POST({ request, cookies }) {
	const { password } = await request.json();

	if (password !== import.meta.env.STUDIO_PASSWORD) {
		return new Response("Unauthorized", { status: 401 });
	}

	cookies.set("studio_auth", "true", {
		httpOnly: true,
		secure: true,
		sameSite: "strict",
		path: "/studio",
		maxAge: 60 * 60 * 8,
	});

	return new Response("OK");
}

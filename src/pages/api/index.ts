if (cookies.get("studio_auth")?.value !== "true") {
	return new Response("Forbidden", { status: 403 });
}

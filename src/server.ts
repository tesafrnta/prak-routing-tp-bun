const server = Bun.serve({
  port: 3000,

  fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    console.log(`[${new Date().toLocaleTimeString()}] ${method} ${path}`);

    // Route: Halaman utama
    if (path === "/" && method === "GET") {
      return new Response(`
        <h1>🏠 Halaman Utama (Bun)</h1>
        <p>Selamat datang di server Bun + TypeScript!</p>
      `, {
        headers: { "Content-Type": "text/html" },
      });
    }

    // Route: About
    else if (path === "/about" && method === "GET") {
      return new Response(`
        <h1>📄 Tentang Kami (Bun)</h1>
        <p>Routing manual dengan Bun sangat mudah!</p>
      `, {
        headers: { "Content-Type": "text/html" },
      });
    }

    // Route: GET users
    else if (path === "/api/users" && method === "GET") {
      const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ];

      return new Response(JSON.stringify(users), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Route: POST users
    else if (path === "/api/users" && method === "POST") {
      return new Response(
        JSON.stringify({ message: "User berhasil dibuat (Bun)" }),
        {
          status: 201,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Route: 404
    else {
      return new Response(`
        <h1>❌ 404 - Halaman Tidak Ditemukan (Bun)</h1>
      `, {
        status: 404,
        headers: { "Content-Type": "text/html" },
      });
    }
  },
});

console.log("Server berjalan di http://localhost:3000");
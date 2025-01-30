export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbzCxEa7mdsZlyD-WoHVibKs8g6QJk9JXxMCVMXODBXiz5KbwUd8QbI2HuDJZ15FzDQ/exec"; // Replace with your Web App URL

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error from Google Apps Script:", errorText);
      return new Response(
        JSON.stringify({ success: false, error: errorText }),
        { status: response.status }
      );
    }

    const result = await response.json();
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    console.error("Error in Next.js API:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}

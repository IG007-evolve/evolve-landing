export const dynamic = "force-dynamic";

const GS_WEB_APP = "https://script.google.com/macros/s/AKfycbwZxC6hoqkj5LouCrJoWQMMAshA6QcHqIOGCtJflVtO6pAaAsaG0nISYzoB4vUe1_EB/exec";

export default async function ResultPage(props: { searchParams: Promise<{ id?: string; email?: string }> }) {
  const searchParams = await props.searchParams;

  const id = searchParams?.id?.trim();
  const email = searchParams?.email?.trim();

  let data: any = null;

  if (id) {
    const res = await fetch(`${GS_WEB_APP}?id=${id}`, { cache: "no-store" });
    data = await res.json();
  } else if (email) {
    const res = await fetch(`${GS_WEB_APP}?email=${email}`, { cache: "no-store" });
    data = await res.json();
  }

  const hasData = data && !data.error;

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold">Your Readiness Result</h1>

        {!hasData ? (
          <div className="mt-8 space-y-4">
            <p className="text-white/70">Provide your Result ID or email to view your latest score.</p>
            <form className="flex flex-col sm:flex-row gap-3" action="/readiness-result" method="get">
              <input name="id" placeholder="Result ID" className="px-4 py-3 rounded-md bg-white/10 border border-white/15 text-white flex-1" />
              <span className="text-white/40">or</span>
              <input name="email" placeholder="Email used in the test" className="px-4 py-3 rounded-md bg-white/10 border border-white/15 text-white flex-1" />
              <button className="px-5 py-3 rounded-md bg-white text-black font-medium">View</button>
            </form>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["LC_Understanding", data.LC_Understanding],
                ["LC_Structure", data.LC_Structure],
                ["LC_Edge_Cases", data.LC_Edge_Cases],
                ["LC_Reasoning", data.LC_Reasoning],
                ["SD_Clarity", data.SD_Clarity],
                ["SD_Scalability", data.SD_Scalability],
                ["SD_Tradeoffs", data.SD_Tradeoffs],
                ["SD_Composure", data.SD_Composure],
              ].map(([label, val]) => (
                <div key={label} className="rounded-lg border border-white/10 p-4 bg-white/[0.03]">
                  <div className="text-xs text-white/50">{label}</div>
                  <div className="text-2xl font-semibold mt-1">{val ?? "—"}</div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03]">
              <div className="text-sm text-white/60">Total Score</div>
              <div className="text-3xl font-semibold">{data.Total_Score} / 16</div>
            </div>

            <div className="rounded-xl border border-white/10 p-5 bg-white/[0.03]">
              <div className="text-sm text-white/60">Profile</div>
              <div className="text-2xl font-semibold">{data.Readiness_Profile}</div>
              {data.Feedback && <p className="text-white/70 mt-3">{data.Feedback}</p>}
            </div>

            <div className="text-sm text-white/50">Result ID: <span className="font-mono">{data.Result_ID}</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

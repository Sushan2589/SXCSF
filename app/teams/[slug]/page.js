import { getBaseUrl } from "@/lib/getBaseUrl";

export default async function TeamPage(props) {
  const { slug } = await props.params;

  if (!slug) return <div>Team not found</div>;

 const res = await fetch(`${getBaseUrl()}/api/participants`, {
  cache: "no-store", 
});
  if (!res.ok) {
    throw new Error("Failed to fetch participants");
  }

  const allParticipants = await res.json();

  // Filter all entries for this team (matching slug)
  const teamParticipants = allParticipants.filter(
    (p) => p.team_code.toLowerCase() === slug.toLowerCase()
  );

  if (teamParticipants.length === 0) {
    return <div>No participants found for team: {slug}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Team Code: <span className="text-indigo-400">{slug.toUpperCase()}</span>
        </h1>

        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-gray-800 text-sm rounded-lg">
            <thead>
              <tr className="bg-gray-700 text-gray-300 uppercase text-xs tracking-wider">
                <th className="px-4 py-3 text-left">Round</th>
                <th className="px-4 py-3 text-left">School</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {teamParticipants.map((entry, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-700 transition-colors duration-200"
                >
                  <td className="px-4 py-3">{entry.round}</td>
                  <td className="px-4 py-3">{entry.school}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block font-semibold px-3 py-1 rounded-full ${
                        entry.selected ? "bg-green-600 text-green-100" : "bg-red-600 text-red-100"
                      }`}
                    >
                      {entry.selected ? "Selected" : "Eliminated"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

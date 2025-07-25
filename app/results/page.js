"use client";

import React, { useEffect, useState, useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Results = () => {
  const [participants, setParticipants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRound, setActiveRound] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParticipants = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/participants");
        const data = await res.json();
        setParticipants(data);
      } catch (e) {
        console.error("Error fetching participants:", error);
        setParticipants([]);
      } finally {
        setLoading(false); // Done loading
      }
    };

    fetchParticipants();
  }, []);

  const filteredParticipants = useMemo(() => {
    let filtered = participants.filter(
      (participant) => participant.round === activeRound
    );

    if (searchTerm) {
      filtered = filtered.filter(
        (participant) =>
          participant.team_code
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          participant.school.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, activeRound, participants]);

  const highlightText = (text, highlight) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="bg-yellow-400 text-black px-1 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const rounds = [1, 2, 3];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Link href={"/"}>
        <div className="flex items-center px-4 py-4 border-b border-gray-700">
          <ArrowLeft className="w-6 h-6 mr-4 text-gray-400" />

          <div>
            <h1 className="text-lg font-medium">SXC Science Fest</h1>
          </div>
        </div>
      </Link>

      <div className="px-4 py-6">
        {/* Scores Title */}
        <h2 className="text-2xl font-bold mb-6">Scores</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Code"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex space-x-0 mb-8">
          {rounds.map((round) => (
            <button
              key={round}
              onClick={() => setActiveRound(round)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeRound === round
                  ? "border-white text-white"
                  : "border-gray-700 text-gray-400 hover:text-gray-300"
              }`}
            >
              Round {round}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="space-y-4">
          {filteredParticipants.map((participant) => (
            <Link
              key={participant.id}
              href={`/teams/${participant.team_code}`}
              className="flex items-center justify-between py-4 border-b border-gray-800 last:border-b-0 hover:bg-gray-800 transition"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gray-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Round {participant.round}
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg mb-1">
                    {highlightText(participant.team_code, searchTerm)}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {highlightText(participant.school, searchTerm)}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`text-sm font-medium ${
                    participant.selected ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {participant.selected ? "Selected" : "Eliminated"}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {loading && (
          <div className="text-center py-12 text-gray-400">
            Loading participants...
          </div>
        )}

        {filteredParticipants.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-600 mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-300 mb-2">
              No results found
            </h3>
            <p className="text-gray-500">
              Try searching with different team codes or check other rounds.
            </p>
          </div>
        )}

        {/* Results Summary */}
        {filteredParticipants.length > 0 && (
          <div className="mt-8 pt-4 border-t border-gray-800">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Total Teams: {filteredParticipants.length}</span>
              <span>
                Selected:{" "}
                {filteredParticipants.filter((p) => p.selected).length} |
                Eliminated:{" "}
                {filteredParticipants.filter((p) => !p.selected).length}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;

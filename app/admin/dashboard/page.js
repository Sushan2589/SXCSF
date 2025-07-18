"use client";
import React, { useEffect,useState } from "react";
import { Plus, Edit2, Trash2, Save, X, Users, Award } from "lucide-react";

const AdminPanel = () => {
  const [participants, setParticipants] = useState([]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    teamCode: "",
    school: "",
    round: 1,
    selected: true,
  });

  useEffect(() => {
    const fetchParticipants = async () => {
      const res = await fetch("/api/participants");
      const data = await res.json();
      setParticipants(data);
    };

    fetchParticipants();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      // Update existing participant
      setParticipants((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? { ...p, ...formData, round: parseInt(formData.round) }
            : p
        )
      );
      setEditingId(null);
    } else {
      // Add new participant
      const newParticipant = {
        id: Date.now().toString(),
        ...formData,
        round: parseInt(formData.round),
      };
      setParticipants((prev) => [...prev, newParticipant]);
    }

    // Reset form
    setFormData({
      teamCode: "",
      school: "",
      round: 1,
      selected: true,
    });
    setShowAddForm(false);
  };

  const handleEdit = (participant) => {
    setFormData({
      teamCode: participant.teamCode,
      school: participant.school,
      round: participant.round,
      selected: participant.selected,
    });
    setEditingId(participant.id);
    setShowAddForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this participant?")) {
      setParticipants((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setShowAddForm(false);
    setFormData({
      teamCode: "",
      school: "",
      round: 1,
      selected: true,
    });
  };

  const getStats = () => {
    const total = participants.length;
    const selected = participants.filter((p) => p.selected).length;
    const eliminated = total - selected;
    const byRound = {
      1: participants.filter((p) => p.round === 1).length,
      2: participants.filter((p) => p.round === 2).length,
      3: participants.filter((p) => p.round === 3).length,
    };
    return { total, selected, eliminated, byRound };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <p className="text-gray-400">Manage Science Fest Results</p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Participant</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-gray-400 text-sm">Total</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-gray-400 text-sm">Selected</p>
                <p className="text-2xl font-bold text-green-400">
                  {stats.selected}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <X className="w-8 h-8 text-red-400" />
              <div>
                <p className="text-gray-400 text-sm">Eliminated</p>
                <p className="text-2xl font-bold text-red-400">
                  {stats.eliminated}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div>
              <p className="text-gray-400 text-sm mb-2">By Round</p>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Round 1:</span>
                  <span>{stats.byRound[1]}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Round 2:</span>
                  <span>{stats.byRound[2]}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Round 3:</span>
                  <span>{stats.byRound[3]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showAddForm && (
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">
              {editingId ? "Edit Participant" : "Add New Participant"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Team Code
                  </label>
                  <input
                    type="text"
                    name="teamCode"
                    value={formData.teamCode}
                    onChange={handleInputChange}
                    placeholder="e.g., TSX-911"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    School/College
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    placeholder="e.g., St. Xavier's College"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Round
                  </label>
                  <select
                    name="round"
                    value={formData.round}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value={1}>Round 1</option>
                    <option value={2}>Round 2</option>
                    <option value={3}>Round 3</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Status
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="selected"
                        value="true"
                        checked={formData.selected === true}
                        onChange={() =>
                          setFormData((prev) => ({ ...prev, selected: true }))
                        }
                        className="mr-2"
                      />
                      <span className="text-green-400">Selected</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="selected"
                        value="false"
                        checked={formData.selected === false}
                        onChange={() =>
                          setFormData((prev) => ({ ...prev, selected: false }))
                        }
                        className="mr-2"
                      />
                      <span className="text-red-400">Eliminated</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingId ? "Update" : "Add"} Participant</span>
                </button>
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Participants Table */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700">
            <h3 className="text-xl font-semibold">All Participants</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Team Code
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    School/College
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Round
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {participants.map((participant) => (
                  <tr key={participant.id} className="hover:bg-gray-750">
                    <td className="px-6 py-4 font-medium">
                      {participant.teamCode}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {participant.school}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-gray-600 px-2 py-1 rounded-full text-xs">
                        Round {participant.round}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          participant.selected
                            ? "bg-green-900 text-green-300"
                            : "bg-red-900 text-red-300"
                        }`}
                      >
                        {participant.selected ? "Selected" : "Eliminated"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(participant)}
                          className="text-blue-400 hover:text-blue-300 p-1"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(participant.id)}
                          className="text-red-400 hover:text-red-300 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {participants.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-300 mb-2">
                No participants yet
              </h3>
              <p className="text-gray-500">
                Add your first participant to get started.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

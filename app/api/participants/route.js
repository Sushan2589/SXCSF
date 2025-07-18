import { NextResponse } from "next/server";

// Mock data storage (replace with DB in real app)
let participants = [
  { id: '1', teamCode: 'TSX-911', school: 'St. Xavier\'s College', round: 1, selected: true },
  { id: '2', teamCode: 'TBK-884', school: 'St. Xavier\'s College', round: 1, selected: false },
  { id: '3', teamCode: 'MNP-445', school: 'Delhi Public School', round: 1, selected: true },
  { id: '4', teamCode: 'QWE-223', school: 'Modern School', round: 1, selected: true },
  { id: '5', teamCode: 'ASD-667', school: 'Ryan International', round: 1, selected: false },
  
  { id: '6', teamCode: 'TSX-911', school: 'St. Xavier\'s College', round: 2, selected: true },
  { id: '7', teamCode: 'MNP-445', school: 'Delhi Public School', round: 2, selected: false },
  { id: '8', teamCode: 'QWE-223', school: 'Modern School', round: 2, selected: true },
  { id: '9', teamCode: 'ZXC-789', school: 'DAV Public School', round: 2, selected: true },
  { id: '10', teamCode: 'POI-334', school: 'Kendriya Vidyalaya', round: 2, selected: false },
  
  { id: '11', teamCode: 'TSX-911', school: 'St. Xavier\'s College', round: 3, selected: true },
  { id: '12', teamCode: 'QWE-223', school: 'Modern School', round: 3, selected: false },
  { id: '13', teamCode: 'ZXC-789', school: 'DAV Public School', round: 3, selected: true },
  { id: '14', teamCode: 'LKJ-556', school: 'Bluebells School', round: 3, selected: true },
  { id: '15', teamCode: 'VBN-998', school: 'Cambridge School', round: 3, selected: false },
];

export async function GET() {
  return NextResponse.json(participants);
}

// For POST, PUT, DELETE you’d handle accordingly
//check cookie isAdmin before get post 

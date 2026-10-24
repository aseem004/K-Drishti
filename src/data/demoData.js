import { LocateFixed, Trees, Trash2, Lightbulb, Waves } from 'lucide-react'

export const categories = ['Roads', 'Drainage', 'Garbage', 'Streetlights', 'Water Supply', 'Parks', 'Other']

export const departments = {
  Roads: 'Roads & Infrastructure',
  Drainage: 'Drainage & Sewerage',
  Garbage: 'Sanitation',
  Streetlights: 'Electrical',
  'Water Supply': 'Jal Sansthan',
  Parks: 'Parks & Horticulture',
  Other: 'Civic Services',
}

export const localities = [
  'Civil Lines', 'Swaroop Nagar', 'Mall Road', 'Kakadeo', 'Govind Nagar',
  'Kidwai Nagar', 'Barra', 'Arya Nagar', 'Panki', 'Kalyanpur',
  'Nawabganj', 'Jajmau', 'Shyam Nagar', 'Ashok Nagar', 'Rawatpur',
]

export const localityCoordinates = {
  'Civil Lines': [26.474, 80.333],
  'Swaroop Nagar': [26.467, 80.327],
  'Mall Road': [26.469, 80.35],
  Kakadeo: [26.484, 80.30],
  'Govind Nagar': [26.431, 80.32],
  'Kidwai Nagar': [26.425, 80.35],
  Barra: [26.418, 80.29],
  'Arya Nagar': [26.477, 80.32],
  Panki: [26.46, 80.24],
  Kalyanpur: [26.512, 80.24],
  Nawabganj: [26.49, 80.33],
  Jajmau: [26.43, 80.41],
  'Shyam Nagar': [26.414, 80.37],
  'Ashok Nagar': [26.48, 80.34],
  Rawatpur: [26.48, 80.28],
}

const coordinates = [
  [26.474, 80.333], [26.467, 80.327], [26.469, 80.35], [26.484, 80.30],
  [26.431, 80.32], [26.425, 80.35], [26.418, 80.29], [26.477, 80.32],
  [26.46, 80.24], [26.512, 80.24], [26.49, 80.33], [26.43, 80.41],
  [26.414, 80.37], [26.48, 80.34], [26.48, 80.28], [26.453, 80.34],
  [26.439, 80.31], [26.49, 80.29], [26.423, 80.34], [26.501, 80.32],
  [26.445, 80.36], [26.458, 80.30], [26.405, 80.32], [26.483, 80.37],
]

const issueSeeds = [
  ['KD-2026-1042', 'Deep pothole beside Civil Lines post office', 'Roads', 'Civil Lines', 'In Progress', 'High', 3, 'A deep depression has opened beside the post office approach, forcing two-wheelers into moving traffic. It needs prompt barricading and resurfacing to reduce collision risk.', 34, 286, '2026-10-24'],
  ['KD-2026-1041', 'Stormwater pooling at Swaroop Nagar crossing', 'Drainage', 'Swaroop Nagar', 'Acknowledged', 'High', 2, 'Rainwater remains pooled across the Swaroop Nagar crossing after showers, slowing pedestrians near the market turn. Clearing the nearby inlet would improve access during wet weather.', 27, 219, '2026-10-23'],
  ['KD-2026-1040', 'Park-boundary lamp out on Mall Road', 'Streetlights', 'Mall Road', 'Resolved', 'Normal', 5, 'One lamp along the Mall Road park boundary had stopped working, leaving the walking edge dim after sunset. The fixture was reported for replacement to improve evening visibility.', 41, 347, '2026-10-22'],
  ['KD-2026-1039', 'Overflowing waste bin near Kakadeo apartments', 'Garbage', 'Kakadeo', 'Submitted', 'Normal', 1, 'A shared waste bin near the Kakadeo apartment lane is full, with loose refuse collecting around its base. A scheduled pickup is needed before the area becomes harder to keep clean.', 19, 154, '2026-10-21'],
  ['KD-2026-1038', 'Morning water pressure drop in Govind Nagar', 'Water Supply', 'Govind Nagar', 'In Progress', 'High', 4, 'Several homes on a Govind Nagar lane are receiving weak water pressure during the morning supply window. Residents need the line checked before the next peak-use period.', 38, 301, '2026-10-20'],
  ['KD-2026-1037', 'Uneven footpath outside Kidwai Nagar market', 'Roads', 'Kidwai Nagar', 'Acknowledged', 'Low', 6, 'Broken paving outside the Kidwai Nagar market creates a narrow, uneven route for shoppers and wheelchair users. Replacing the loose section would make the busy frontage safer.', 23, 198, '2026-10-19'],
  ['KD-2026-1036', 'Missing drain cover beside Barra lane', 'Drainage', 'Barra', 'Resolved', 'Normal', 7, 'A damaged cover left an opening beside a Barra residential lane, creating a hazard for people walking after dark. A secure replacement was requested to restore the drain edge.', 46, 372, '2026-10-18'],
  ['KD-2026-1035', 'Waste pickup missed on Arya Nagar lane 4', 'Garbage', 'Arya Nagar', 'In Progress', 'Normal', 8, 'The Arya Nagar lane 4 collection point has been missed, and bags are accumulating outside homes. A catch-up collection would prevent animals from scattering the waste.', 31, 264, '2026-10-17'],
  ['KD-2026-1034', 'Loose swing chain at Panki playground', 'Parks', 'Panki', 'Submitted', 'Low', 9, 'One swing at the Panki playground has a loose chain and should be taken out of use until inspected. Repairing it is important for children using the busy play area.', 16, 143, '2026-10-16'],
  ['KD-2026-1033', 'Rain-cut road surface near Kalyanpur school', 'Roads', 'Kalyanpur', 'Resolved', 'High', 10, 'Recent rain has widened several breaks in the road surface near a Kalyanpur school entrance. The rough approach affects school traffic and needs a durable patch rather than loose filling.', 52, 418, '2026-10-15'],
  ['KD-2026-1032', 'Public water connection leaking in Nawabganj', 'Water Supply', 'Nawabganj', 'Acknowledged', 'Normal', 11, 'A public connection in Nawabganj is leaking steadily onto the edge of the lane. Checking the joint soon could limit water loss and prevent the surface from becoming slippery.', 29, 237, '2026-10-14'],
  ['KD-2026-1031', 'Silted drain beside Jajmau bus stop', 'Drainage', 'Jajmau', 'In Progress', 'High', 12, 'Silt and litter are restricting the drain beside the Jajmau bus stop, leaving water close to the waiting area. Desilting before heavier rain would protect passengers from standing water.', 44, 355, '2026-10-13'],
  ['KD-2026-1030', 'Flickering streetlight at Shyam Nagar turn', 'Streetlights', 'Shyam Nagar', 'Resolved', 'Normal', 13, 'The streetlight at a Shyam Nagar turn was flickering and intermittently going dark. A stable light there helps people see the bend and nearby driveways after sunset.', 37, 329, '2026-10-12'],
  ['KD-2026-1029', 'Shrubs narrowing Ashok Nagar walking path', 'Parks', 'Ashok Nagar', 'Acknowledged', 'Low', 14, 'Overgrown shrubs have narrowed the Ashok Nagar walking path and make it difficult for people to pass side by side. Trimming the growth would reopen the marked pedestrian space.', 21, 176, '2026-10-11'],
  ['KD-2026-1028', 'Broken carriageway near Rawatpur school', 'Roads', 'Rawatpur', 'Submitted', 'High', 15, 'A broken patch near the Rawatpur school approach catches vehicle wheels and channels runoff toward the entrance. It should be marked for repair before school traffic increases.', 18, 167, '2026-10-10'],
  ['KD-2026-1027', 'Persistent waterlogging near Civil Lines shops', 'Drainage', 'Civil Lines', 'Resolved', 'Normal', 16, 'Light rain has previously left water standing outside the Civil Lines shopfronts because the side drain clears slowly. Improving the outlet would keep the pedestrian edge usable.', 49, 401, '2026-10-09'],
  ['KD-2026-1026', 'Loose refuse beside Govind Nagar corner shop', 'Garbage', 'Govind Nagar', 'Acknowledged', 'Normal', 17, 'Loose refuse is collecting beside a Govind Nagar corner shop rather than inside the nearby container. A timely sweep and pickup would reduce obstruction for customers and residents.', 26, 212, '2026-10-08'],
  ['KD-2026-1025', 'Damaged seating plank in Kalyanpur park', 'Parks', 'Kalyanpur', 'In Progress', 'Low', 18, 'A seating plank in the Kalyanpur park is cracked and uncomfortable to use. Repairing the bench would restore a resting place for older visitors and caregivers.', 33, 281, '2026-10-07'],
  ['KD-2026-1024', 'Evening supply pressure low in Kidwai Nagar', 'Water Supply', 'Kidwai Nagar', 'Submitted', 'Normal', 19, 'Water pressure drops noticeably during the evening supply window on a Kidwai Nagar lane. A local valve or line check could identify why homes are receiving uneven flow.', 22, 185, '2026-10-06'],
  ['KD-2026-1023', 'Dark stretch beside Nawabganj clinic', 'Streetlights', 'Nawabganj', 'Resolved', 'High', 20, 'A short stretch beside the Nawabganj clinic was left dark after sunset, making the entrance harder to locate. Restoring dependable lighting supports patients and attendants arriving late.', 58, 463, '2026-10-05'],
  ['KD-2026-1022', 'Loose manhole cover on Arya Nagar service road', 'Roads', 'Arya Nagar', 'Acknowledged', 'High', 21, 'The manhole cover on an Arya Nagar service road shifts under traffic and leaves a visible edge. Securing it quickly would reduce the chance of a cyclist or vehicle catching the rim.', 47, 389, '2026-10-04'],
  ['KD-2026-1021', 'Leaf-blocked drainage grate on Mall Road', 'Drainage', 'Mall Road', 'Submitted', 'Low', 22, 'Dry leaves are covering a Mall Road drainage grate and slowing surface runoff. Removing the debris before the next shower would help keep the curb lane clear.', 14, 132, '2026-10-03'],
  ['KD-2026-1020', 'Public tap running beside Barra bus shelter', 'Water Supply', 'Barra', 'Resolved', 'Normal', 23, 'A public tap beside the Barra bus shelter had been running after use, leaving the paving wet. Repairing the tap helps conserve water and keeps the waiting area safer.', 43, 344, '2026-10-02'],
  ['KD-2026-1019', 'Litter accumulation beside Shyam Nagar playground', 'Garbage', 'Shyam Nagar', 'In Progress', 'Normal', 24, 'Litter has collected beside the Shyam Nagar playground fence after busy evening use. Clearing the edge and adding a regular pickup would keep children away from scattered waste.', 35, 297, '2026-10-01'],
]

export const demoIssues = issueSeeds.map(([id, title, category, locality, status, priority, coordinateIndex, description, supporters, views, date], index) => ({
  id,
  title,
  category,
  locality,
  status,
  priority,
  department: departments[category],
  date: new Date(`${date}T${String(9 + (index % 8)).padStart(2, '0')}:00:00+05:30`).toISOString(),
  description,
  supporters,
  views,
  lat: coordinates[coordinateIndex - 1][0],
  lng: coordinates[coordinateIndex - 1][1],
}))

export function createUserIssue(form, issues) {
  const issueNumber = Math.max(1040, ...issues.map((issue) => Number(issue.id.match(/(\d+)$/)?.[1] || 0))) + 1
  const localityCoords = localityCoordinates[form.locality] || [26.4499, 80.3319]
  const supporters = issues.length + 1
  return {
    ...form,
    id: `KD-2026-${issueNumber}`,
    date: new Date().toISOString(),
    status: 'Submitted',
    department: departments[form.category] || departments.Other,
    supporters,
    views: supporters + 3,
    lat: localityCoords[0],
    lng: localityCoords[1],
  }
}

export const projects = [
  { id: 'roads', name: 'Road improvements', category: 'Roads', budget: 18, released: 13.5, spent: 10.4, verified: 9.3, progress: 62, status: 'In progress', icon: LocateFixed },
  { id: 'drainage', name: 'Drainage & flood mitigation', category: 'Drainage', budget: 9, released: 6.8, spent: 4.8, verified: 4.1, progress: 48, status: 'In progress', icon: Waves },
  { id: 'sanitation', name: 'Neighbourhood sanitation', category: 'Garbage', budget: 8, released: 6.2, spent: 4.2, verified: 3.8, progress: 71, status: 'On track', icon: Trash2 },
  { id: 'streetlights', name: 'Streetlight renewal', category: 'Streetlights', budget: 7, released: 5.5, spent: 3.6, verified: 2.9, progress: 56, status: 'In progress', icon: Lightbulb },
  { id: 'parks', name: 'Parks & public spaces', category: 'Parks', budget: 6, released: 4, spent: 2.4, verified: 1.7, progress: 39, status: 'In progress', icon: Trees },
]

export const demoExpenses = [
  { id: 'r1', projectId: 'roads', description: 'Road resurfacing materials', amount: 4.8, date: '2026-10-14', verified: true },
  { id: 'r2', projectId: 'roads', description: 'Contractor milestone payment', amount: 4.5, date: '2026-10-18', verified: true },
  { id: 'r3', projectId: 'roads', description: 'Traffic management & site works', amount: 1.1, date: '2026-10-22', verified: false },
  { id: 'd1', projectId: 'drainage', description: 'Drain clearing works', amount: 2.1, date: '2026-10-11', verified: true },
  { id: 'd2', projectId: 'drainage', description: 'Manhole and grate replacement', amount: 2, date: '2026-10-17', verified: true },
  { id: 'd3', projectId: 'drainage', description: 'Ward inspection & equipment', amount: 0.7, date: '2026-10-21', verified: false },
  { id: 's1', projectId: 'sanitation', description: 'Community bin replacement', amount: 1.5, date: '2026-10-09', verified: true },
  { id: 's2', projectId: 'sanitation', description: 'Waste route equipment', amount: 2.3, date: '2026-10-16', verified: true },
  { id: 's3', projectId: 'sanitation', description: 'Collection point improvements', amount: 0.4, date: '2026-10-23', verified: false },
  { id: 'l1', projectId: 'streetlights', description: 'LED fixture procurement', amount: 1.7, date: '2026-10-12', verified: true },
  { id: 'l2', projectId: 'streetlights', description: 'Installation milestone', amount: 1.2, date: '2026-10-19', verified: true },
  { id: 'l3', projectId: 'streetlights', description: 'Electrical safety inspection', amount: 0.7, date: '2026-10-23', verified: false },
  { id: 'p1', projectId: 'parks', description: 'Playground equipment repair', amount: 1, date: '2026-10-10', verified: true },
  { id: 'p2', projectId: 'parks', description: 'Pathway and seating repairs', amount: 0.7, date: '2026-10-17', verified: true },
  { id: 'p3', projectId: 'parks', description: 'Planting and site maintenance', amount: 0.7, date: '2026-10-22', verified: false },
]

export const statusColors = {
  Submitted: 'var(--badge-submitted-fg)',
  Acknowledged: 'var(--badge-acknowledged-fg)',
  'In Progress': 'var(--teal)',
  Resolved: 'var(--badge-resolved-fg)',
}


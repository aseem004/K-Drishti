import assert from 'node:assert/strict'
import { categories, createUserIssue, demoIssues, departments, localities } from '../src/data/demoData.js'

const statuses = new Set(['Submitted', 'Acknowledged', 'In Progress', 'Resolved'])
const referenceDate = new Date('2026-10-24T23:59:59+05:30')
const normalize = (value) => value.trim().toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ')
const wordsWithoutLocality = (value) => normalize(value).split(' ').filter((word) => !localities.some((locality) => normalize(locality).split(' ').includes(word)))
const wordSet = (value) => new Set(wordsWithoutLocality(value))
const sentenceCount = (value) => value.split(/[.!?]+/).map((part) => part.trim()).filter(Boolean).length

assert.ok(demoIssues.length > 0, 'The seeded issue dataset must not be empty.')
assert.equal(new Set(demoIssues.map((issue) => issue.id)).size, demoIssues.length, 'Duplicate complaint IDs found.')
assert.equal(new Set(demoIssues.map((issue) => normalize(issue.title))).size, demoIssues.length, 'Duplicate normalized titles found.')
assert.equal(new Set(demoIssues.map((issue) => normalize(issue.description))).size, demoIssues.length, 'Duplicate normalized descriptions found.')

for (const issue of demoIssues) {
  assert.ok(issue.id.match(/^KD-\d{4}-\d+$/), `Invalid complaint ID: ${issue.id}`)
  assert.ok(issue.title.trim().length >= 20, `Title is too short: ${issue.id}`)
  assert.ok(!/^(road|drainage|garbage|streetlight|water|park) (problem|issue)$/i.test(issue.title), `Generic title: ${issue.id}`)
  assert.ok(issue.description.trim().length >= 50, `Description is too short: ${issue.id}`)
  assert.ok(sentenceCount(issue.description) >= 1 && sentenceCount(issue.description) <= 2, `Description must be 1-2 sentences: ${issue.id}`)
  assert.ok(categories.includes(issue.category), `Invalid category: ${issue.id}`)
  assert.equal(issue.department, departments[issue.category], `Department does not match category: ${issue.id}`)
  assert.ok(localities.includes(issue.locality), `Invalid locality: ${issue.id}`)
  assert.ok(statuses.has(issue.status), `Invalid status: ${issue.id}`)
  assert.ok(Number.isInteger(issue.supporters) && issue.supporters >= 0, `Invalid supporter count: ${issue.id}`)
  assert.ok(Number.isInteger(issue.views) && issue.views > issue.supporters, `Views must exceed supporters: ${issue.id}`)
  const date = new Date(issue.date)
  assert.ok(!Number.isNaN(date.valueOf()) && date <= referenceDate, `Invalid or future date: ${issue.id}`)
  if (issue.status === 'Resolved') assert.ok(date < referenceDate, `Resolved issue must have a completed date: ${issue.id}`)
}

for (let first = 0; first < demoIssues.length; first += 1) {
  for (let second = first + 1; second < demoIssues.length; second += 1) {
    const left = wordSet(demoIssues[first].description)
    const right = wordSet(demoIssues[second].description)
    const intersection = [...left].filter((word) => right.has(word)).length
    const union = new Set([...left, ...right]).size
    assert.ok(intersection / union < 0.72, `Near-duplicate descriptions found: ${demoIssues[first].id} and ${demoIssues[second].id}`)
  }
}

const userDescription = 'The broken signboard blocks the narrow footpath outside the community library.'
const newIssue = createUserIssue({
  title: 'Broken library signboard blocks footpath',
  category: 'Roads',
  locality: 'Civil Lines',
  description: userDescription,
  priority: 'Normal',
}, demoIssues)
assert.equal(newIssue.description, userDescription, 'User-submitted description was not preserved.')
assert.ok(!demoIssues.some((issue) => issue.id === newIssue.id), 'Generated complaint ID collides with seeded data.')
assert.ok(newIssue.views > newIssue.supporters, 'New complaint engagement counts are invalid.')

console.log(`Validated ${demoIssues.length} seeded issues: unique IDs, titles, descriptions, valid mappings, counts, dates, and status values.`)
console.log('Verified user-submitted descriptions are preserved and generated IDs do not collide.')

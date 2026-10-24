import assert from 'node:assert/strict'

const storage = new Map()
globalThis.window = {
  localStorage: {
    getItem: (key) => storage.get(key) || null,
    setItem: (key, value) => storage.set(key, value),
  },
}
const { demoIssues, createUserIssue } = await import('../src/data/demoData.js')
const { getSupportedIssueIds, toggleIssueSupport } = await import('../src/services/supportRepository.js')

const issue = demoIssues[0]
const original = { ...issue }
assert.equal(getSupportedIssueIds().has(issue.id), false)

let selected = toggleIssueSupport(issue.id)
assert.equal(selected.has(issue.id), true)
assert.equal(issue.supporters + 1, original.supporters + 1, 'A support action should increment the displayed count once.')

selected = toggleIssueSupport(issue.id)
assert.equal(selected.has(issue.id), false, 'Repeated support clicks should withdraw support rather than duplicate it.')
assert.equal(issue.supporters, original.supporters, 'Withdrawing support should restore the original count.')

toggleIssueSupport(issue.id)
assert.equal(getSupportedIssueIds().has(issue.id), true, 'Support selection should persist in localStorage.')
const refreshedSelection = getSupportedIssueIds()
assert.equal(refreshedSelection.has(issue.id), true, 'Support selection should survive a fresh repository read.')
assert.equal(issue.status, original.status)
assert.equal(issue.description, original.description)

const newIssue = createUserIssue({
  title: 'A separate reported concern',
  category: 'Roads',
  locality: 'Civil Lines',
  description: 'The user supplied this description for a new report.',
  priority: 'Normal',
}, demoIssues)
assert.notEqual(newIssue.id, issue.id, 'Supporting an issue must not create a complaint.')
assert.equal(newIssue.description, 'The user supplied this description for a new report.')

console.log('Support toggle, duplicate prevention, withdrawal, persistence, issue preservation, and report separation passed.')

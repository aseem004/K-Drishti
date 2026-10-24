const identityKey = 'kdrishti-support-identity'
const selectionsKey = 'kdrishti-supported-issues'

function readJson(key, fallback) {
  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

function saveJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Support remains available for the current session if storage is unavailable.
  }
}

function createIdentity() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `visitor-${Date.now()}-${Math.random().toString(36).slice(2)}`
}

export function getSupportIdentity() {
  const stored = readJson(identityKey, '')
  if (typeof stored === 'string' && stored) return stored
  const identity = createIdentity()
  saveJson(identityKey, identity)
  return identity
}

export function getSupportedIssueIds() {
  getSupportIdentity()
  const stored = readJson(selectionsKey, [])
  return new Set(Array.isArray(stored) ? stored.filter((id) => typeof id === 'string') : [])
}

export function setIssueSupported(issueId, supported) {
  const selected = getSupportedIssueIds()
  if (supported) selected.add(issueId)
  else selected.delete(issueId)
  saveJson(selectionsKey, [...selected])
  return selected
}

export function toggleIssueSupport(issueId) {
  const selected = getSupportedIssueIds()
  return setIssueSupported(issueId, !selected.has(issueId))
}

export { selectionsKey }

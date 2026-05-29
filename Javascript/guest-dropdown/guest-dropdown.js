const counts = { adult: 1, child: 0, room: 1 }

function change(type, val) {
  counts[type] = Math.max(0, counts[type] + val)
  document.getElementById(`${type}-count`).textContent = counts[type]
  document.getElementById('guest-summary').textContent =
    `${counts.adult} Adult(s), ${counts.child} Child, ${counts.room} Room`
}

document.getElementById('guest-toggle').addEventListener('click', () => {
  document.getElementById('guest-dropdown').classList.toggle('show')
})

function closeDropdown() {
  document.getElementById('guest-dropdown').classList.remove('show')
}
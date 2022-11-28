var sel = document.getElementById('name')
console.log(sel)

sel.addEventListener('change', () => {
  const contacts = [
    'Ram',
    'Shyam',
    'Ghansyam',
    'Mukesh',
    'Suresh',
    'Rajesh',
    'Prakash',
  ]

  const phone = [123, 787, 938, 8483, 833, 293, 33]

  const index = contacts.findIndex((c) => c === sel.value)
  if (index !== -1) {
    const tele = document.getElementById('tele')
    tele.innerHTML = phone[index]
  } else {
    tele.innerHTML = ''
  }
})

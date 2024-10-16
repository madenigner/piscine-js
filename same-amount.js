function sameAmount(str,regex1,regex2) {

  const r1 = new RegExp(regex1.source, regex1.flags.includes('g') ? regex1.flags : regex1.flags + 'g');
  const r2 = new RegExp(regex2.source, regex2.flags.includes('g') ? regex2.flags : regex2.flags + 'g');
    let macth1 = str.match(r1) || []
    let macth2 = str.match(r2) || []

  return macth1.length == macth2.length
}


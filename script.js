const map = L.map("map").setView([54.5, -3.0], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
const locations = 
  [
    {
      title: "BOURNEMOUTH, ABM STEEL UK LTD.",
      description: "BOURNEMOUTH, ABM STEEL UK LTD.",
      coords: [50.7466341, -1.7916866],
    },
        {
      title: "Nelson, North Valley Forge",
      description: "Nelson, North Valley Forge",
      coords: [53.84711943143975, -2.2137780972491323],
    },
        {
      title: "Driffield, DC Blacksmiths LTD.",
      description: "Driffield, DC Blacksmiths LTD.",
      coords: [54.115338472630924, -0.3188382193967714],
    },
      {
      title: "Ashford, Creative Iron Works",
      description: "Ashford, Creative Iron Works",
      coords: [51.12992840455618, 0.8431266625610458],
    },
     {
      title: "Buckingham, Iron Forged Designs",
      description: "Buckingham, Iron Forged Designs",
      coords: [52.023112550875204, -1.143060712348107],
    },
      {
      title: "Newark, ABC Fabrications",
      description: "Newark, ABC Fabrications",
      coords: [53.13200032347925, -0.8430642368279788],
    },
    {
      title: "NEWCASTLE, DC Handrails & Ironwork Parts Ltd",
      description: "NEWCASTLE, DC Handrails & Ironwork Parts Ltd",
      coords: [54.951984, -1.6889239],
    },
    {
      title: "BIRMINGHAM, FH BRUNDLE",
      description: "BIRMINGHAM, FH BRUNDLE",
      coords: [52.50795891842268, -1.9585681954235092],
    },
    {
      title: "GLASGOW, FH BRUNDLE",
      description: "GLASGOW, FH BRUNDLE",
      coords: [55.863861, -4.1412034],
    },
    {
      title: "EDINBURG, FH BRUNDLE",
      description: "EDINBURG, FH BRUNDLE",
      coords: [26.3017374, -98.1633432],
    },
    {
      title: "HAYDOCK, FH BRUNDLE",
      description: "HAYDOCK, FH BRUNDLE",
      coords: [53.4676162, -2.6849601],
    },
    {
      title: "ILKESTON, FH BRUNDLE",
      description: "ILKESTON, FH BRUNDLE",
      coords: [52.9523315, -1.3038935],
    },
    {
      title: "RAINHAM, FH BRUNDLE",
      description: "RAINHAM, FH BRUNDLE",
      coords: [51.5152035, 0.1885792],
    },
    {
      title: "SOUTHAMPTON, FH BRUNDLE",
      description: "SOUTHAMPTON, FH BRUNDLE",
      coords: [50.9105468, -1.4049018],
    },
    {
      title: "CANNOCK, CANNOCK GATES LTD.",
      description: "CANNOCK, CANNOCK GATES LTD.",
      coords: [52.6929292, -2.0140157],
    },
    {
      title: "STOURBRİDGE, GATES RAILINGS DIRECT",
      description: "STOURBRİDGE, GATES RAILINGS DIRECT",
      coords: [52.4540044, -2.131948],
    },
    {
      title: "PAINGTON, GATES & FENCES UK",
      description: "PAINGTON, GATES & FENCES UK",
      coords: [50.43508, -3.564235],
    },
    {
      title: "STEVENAGE, JARRETT FENCING",
      description: "STEVENAGE, JARRETT FENCING",
      coords: [51.8829917, -0.1495456],
    },
    {
      title: "THOLTHORPE, THE REAL WROUGHT IRON COMPANY",
      description: "THOLTHORPE, THE REAL WROUGHT IRON COMPANY",
      coords: [54.0954761, -1.2752569],
    },
    {
      title: "WINMARLEIGH, WROUGHT IRON GATES",
      description: "WINMARLEIGH, WROUGHT IRON GATES",
      coords: [53.9262515, -2.8041116],
    },
    {
      title: "SUTTON COLDFIELD, BRITISH IRONMONGERY",
      description: "SUTTON COLDFIELD, BRITISH IRONMONGERY",
      coords: [52.570385, -1.824042],
    },
    {
      title: "HACKNEY, DERBYSHIRE, BLACK DRAGON FORGE",
      description: "HACKNEY, DERBYSHIRE, BLACK DRAGON FORGE",
      coords: [53.1563141, -1.5750216],
    },
    {
      title: "EXMOOR, WEST COUNTRY BLACKSMITHS LTD.",
      description: "EXMOOR, WEST COUNTRY BLACKSMITHS LTD.",
      coords: [51.134614, -3.6462346],
    },
    {
      title: "STOCKPORT, CALIBRE METAL WORK",
      description: "STOCKPORT, CALIBRE METAL WORK",
      coords: [53.4106316, -2.1575332],
    },
    {
      title: "DARLINGTON, LITTLE NEWSHAM FORGE",
      description: "DARLINGTON, LITTLE NEWSHAM FORGE",
      coords: [54.52361, -1.559458],
    },
    {
      title: "STURMINSTER NEWTON, NEWTON FORGE LTD.",
      description: "STURMINSTER NEWTON, NEWTON FORGE LTD.",
      coords: [50.9291508, -2.301216],
    },
    {
      title: "LOUGHTON, WALTHAM FOREST ENGINEERING LTD.",
      description: "LOUGHTON, WALTHAM FOREST ENGINEERING LTD.",
      coords: [51.643282, 0.078378],
    },
    {
      title: ", ATKINSONS WROUGHT IRON",
      description: ", ATKINSONS WROUGHT IRON",
      coords: [54.5904315, -1.0298891],
    },
    {
      title: "FAREHAM, STOKERS GATE",
      description: "FAREHAM, STOKERS GATE",
      coords: [50.8405032, -1.1826514],
    },
    {
      title: "BEWDLEY, GAYTSMAID WROUGHT IRON",
      description: "BEWDLEY, GAYTSMAID WROUGHT IRON",
      coords: [52.375539, -2.316973],
    },
    {
      title: "ALDERSHOT, HAMPSHIRE METALCRAFT",
      description: "ALDERSHOT, HAMPSHIRE METALCRAFT",
      coords: [51.2471608, -0.7211191],
    },
    {
      title: "CHESTERFIELD, ASPIRE GATES LTD.",
      description: "CHESTERFIELD, ASPIRE GATES LTD.",
      coords: [53.2718332, -1.4502302],
    },
    {
      title: "DYSERTH, HEAT & BEAT",
      description: "DYSERTH, HEAT & BEAT",
      coords: [53.3112316, -3.4159651],
    },
    {
      title: "WHITBY, GOLDBOLD BLACKSMITHS LTD.",
      description: "WHITBY, GOLDBOLD BLACKSMITHS LTD.",
      coords: [54.486335, -0.613347],
    },
    {
      title: "FARNHAM ROYAL, THE WROUGHT IRON MAN",
      description: "FARNHAM ROYAL, THE WROUGHT IRON MAN",
      coords: [51.5419384, -0.6265572],
    },
    {
      title: "RAMSGATE, WORKS OF IRON",
      description: "RAMSGATE, WORKS OF IRON",
      coords: [51.3450365, 1.4081581],
    },
    {
      title: "NEWHAVEN, GW IRONWORKS LTD.",
      description: "NEWHAVEN, GW IRONWORKS LTD.",
      coords: [50.7979467, 0.0562023],
    },
    {
      title: "SUDBURY, SUFFOLK FABRICATIONS LTD.",
      description: "SUDBURY, SUFFOLK FABRICATIONS LTD.",
      coords: [52.271377, 1.0721487],
    },
    {
      title: "LONGTON, ARTISTIC ENGINEERING",
      description: "LONGTON, ARTISTIC ENGINEERING",
      coords: [52.9873967, -2.1316502],
    },
    {
      title: "LEEDS, Crystal Mansions Design & Build LTD.",
      description: "LEEDS, Crystal Mansions Design & Build LTD.",
      coords: [53.8007554, -1.5490774],
    },
    {
      title: "MANCHESTER, Bradweld Fabrications Ltd ",
      description: "MANCHESTER, Bradweld Fabrications Ltd ",
      coords: [53.48616, -2.345295],
    },
    {
      title: "Kidderminster, Christian Day Ltd",
      description: "Kidderminster, Christian Day Ltd",
      coords: [52.3932511, -2.2575688],
    },
    {
      title: "Crawley, Iron Works",
      description: "Crawley, Iron Works",
      coords: [54.9549402, -1.685701],
    },
    {
      title: "London, E Smith Metal Fabrications Ltd ",
      description: "London, E Smith Metal Fabrications Ltd ",
      coords: [51.5072178, -0.1275862],
    },
    {
      title: "Benfleet, Farthings",
      description: "Benfleet, Farthings",
      coords: [51.5536843, 0.559837],
    },
    {
      title: "Esher, Burvills",
      description: "Esher, Burvills",
      coords: [51.3805565, -0.3749804],
    },
    {
      title: "Pershore, S E Cooper Ironworkers ",
      description: "Pershore, S E Cooper Ironworkers ",
      coords: [52.1094144, -2.0739825],
    },
    {
      title: "Liverpool, Sarah's Steels ",
      description: "Liverpool, Sarah's Steels ",
      coords: [53.3521405, -2.8471753],
    },
    {
      title: "Bridport, R J Leaf ",
      description: "Bridport, R J Leaf ",
      coords: [50.7335769, -2.758301],
    },
    {
      title: "Lockerbie, C G P Welding Ltd ",
      description: "Lockerbie, C G P Welding Ltd ",
      coords: [55.1293223, -3.4441844],
    },
    {
      title: "Kirkcaldy, Ewan's Gates & Railings ",
      description: "Kirkcaldy, Ewan's Gates & Railings ",
      coords: [56.1276752, -3.1563668],
    },
    {
      title: "Stoke On Trent, D Y Gates & Son ",
      description: "Stoke On Trent, D Y Gates & Son ",
      coords: [52.9971347, -2.1501297],
    },
    {
      title: "Bury, Russo Engineering ",
      description: "Bury, Russo Engineering ",
      coords: [53.5831359, -2.2988481],
    },
    {
      title: "Nuneaton, Arbury Gates & Railings",
      description: "Nuneaton, Arbury Gates & Railings",
      coords: [52.5277494, -1.5392431],
    },
    {
      title: "Wimborne, 1st Class Wrought Iron ",
      description: "Wimborne, 1st Class Wrought Iron ",
      coords: [50.8004646, -1.9830004],
    },
    {
      title: "London, Ironwright",
      description: "London, Ironwright",
      coords: [51.4695692, -0.1657574],
    },
    {
      title: "Ilfracombe, North Devon Wrought Iron Design ",
      description: "Ilfracombe, North Devon Wrought Iron Design ",
      coords: [51.205163, -4.126762],
    },
    {
      title: "Wigan, L A Engineering ",
      description: "Wigan, L A Engineering ",
      coords: [53.5450645, -2.6325074],
    },
    {
      title: "Sudbury, N A Contracts",
      description: "Sudbury, N A Contracts",
      coords: [46.4917317, -80.993029],
    },
    {
      title: "Wimborne, Abbott Street Forge ",
      description: "Wimborne, Abbott Street Forge ",
      coords: [50.8004646, -1.9830004],
    },
    {
      title: "Betchworth, Betchworth Forge ",
      description: "Betchworth, Betchworth Forge ",
      coords: [51.2404162, -0.2666661],
    },
    {
      title: "Sheffield, Excelsior Wrought Iron Works",
      description: "Sheffield, Excelsior Wrought Iron Works",
      coords: [53.4440864, -1.4575562],
    },
    {
      title: "Carmarthen, Incus Iron ",
      description: "Carmarthen, Incus Iron ",
      coords: [51.8575796, -4.3119032],
    },
    {
      title: "Rotherham, Premier Iron Craft",
      description: "Rotherham, Premier Iron Craft",
      coords: [53.4326035, -1.3635009],
    },
    {
      title: "Uckfield, Best Ironwork Ltd ",
      description: "Uckfield, Best Ironwork Ltd ",
      coords: [50.9750315, 0.1482305],
    },
    {
      title: "Manchester, Wrought Iron Centre",
      description: "Manchester, Wrought Iron Centre",
      coords: [53.5519215, -2.1914063],
    },
    {
      title: "Kettering, Kingfisher Metal Products",
      description: "Kettering, Kingfisher Metal Products",
      coords: [52.396322, -0.730249],
    },
    {
      title: "Rotherham, D & B Fencing Ltd ",
      description: "Rotherham, D & B Fencing Ltd ",
      coords: [53.4326035, -1.3635009],
    },
    {
      title: "Boston, Frank Clayton & Son ",
      description: "Boston, Frank Clayton & Son ",
      coords: [42.3555076, -71.0565364],
    },
    {
      title: "Magherafelt, K-scroll Ltd ",
      description: "Magherafelt, K-scroll Ltd ",
      coords: [54.755373, -6.6079805],
    },
    {
      title: "Wrexham, Northall's Wrought Iron Designs Ltd ",
      description: "Wrexham, Northall's Wrought Iron Designs Ltd ",
      coords: [52.9707433, -3.0685573],
    },
    {
      title: "Bath, Garden Requisites Ltd ",
      description: "Bath, Garden Requisites Ltd ",
      coords: [51.3781018, -2.3596827],
    },
    {
      title: "Croydon, Addington Forge ",
      description: "Croydon, Addington Forge ",
      coords: [51.3587074, -0.0304007],
    },
    {
      title: "Shrewsbury, A I Steel Services ",
      description: "Shrewsbury, A I Steel Services ",
      coords: [52.7960691, -2.7808566],
    },
    {
      title: "Shildon, Valley Wrought Iron ",
      description: "Shildon, Valley Wrought Iron ",
      coords: [54.6237964, -1.6542191],
    },
    {
      title: "Bury, Ramsbottom Metalwork ",
      description: "Bury, Ramsbottom Metalwork ",
      coords: [53.648457, -2.32049],
    },
    {
      title: "Banwell, Classic Ironworks ",
      description: "Banwell, Classic Ironworks ",
      coords: [51.3213376, -2.8600735],
    },
    {
      title: "Middlesbrough, Leven Wrought Iron & Fabrication ",
      description: "Middlesbrough, Leven Wrought Iron & Fabrication ",
      coords: [54.574227, -1.234956],
    },
    {
      title: "Bolton, The Olde Forge Ltd ",
      description: "Bolton, The Olde Forge Ltd ",
      coords: [53.5768647, -2.4282192],
    },
    {
      title: "Irvine, Metaluna Design & Fabrication ",
      description: "Irvine, Metaluna Design & Fabrication ",
      coords: [55.6404395537614, -4.758294453854173],
    },
    {
      title: "Leeds, Saxon Fabrications ",
      description: "Leeds, Saxon Fabrications ",
      coords: [53.8007554, -1.5490774],
    },
    {
      title: "Aylesbury, G Hammond & Son ",
      description: "Aylesbury, G Hammond & Son ",
      coords: [51.8176538, -0.8192388],
    },
    {
      title: "Newark, A B C Fabrications ",
      description: "Newark, A B C Fabrications ",
      coords: [53.3312730040948, -0.8413053703112775],
    },
    {
      title: "Epsom, Campbell Security ",
      description: "Epsom, Campbell Security ",
      coords: [51.3380353, -0.2663022],
    },
    {
      title: "St Agnes, Jay's Gates ",
      description: "St Agnes, Jay's Gates ",
      coords: [50.2978868, -5.2003973],
    },
    {
      title: "Birkenhead, Cheshire Forge ",
      description: "Birkenhead, Cheshire Forge ",
      coords: [53.385405, -3.021191],
    },
    {
      title: "Shefford, Anglia Steelcraft ",
      description: "Shefford, Anglia Steelcraft ",
      coords: [52.0377939, -0.3231721],
    },
    {
      title: "St Helens, Edwards Wrought Iron ",
      description: "St Helens, Edwards Wrought Iron ",
      coords: [53.456307, -2.737095],
    },
    {
      title: "New Romney, Eastwell Ironworks Ltd ",
      description: "New Romney, Eastwell Ironworks Ltd ",
      coords: [50.982558, 0.9485505],
    },
    {
      title: "Seaham, Kraftwerx Wrought Ironwork ",
      description: "Seaham, Kraftwerx Wrought Ironwork ",
      coords: [54.8166898, -1.3652081],
    },
    {
      title: "Huddersfield, Fabrigate",
      description: "Huddersfield, Fabrigate",
      coords: [53.6397525, -1.7859155],
    },
    {
      title: "Manchester, R G S Wrought Iron ",
      description: "Manchester, R G S Wrought Iron ",
      coords: [53.4807593, -2.2426305],
    },
    {
      title: "Doncaster, Weldit",
      description: "Doncaster, Weldit",
      coords: [53.5227501, -1.132336],
    },
    {
      title:
        "Gillingham, Shaun Stallard Architectural Metal Work & Restoration",
      description:
        "Gillingham, Shaun Stallard Architectural Metal Work & Restoration",
      coords: [51.330898, 0.573893],
    },
    {
      title: "Bury St Edmunds, Designs on Metal ",
      description: "Bury St Edmunds, Designs on Metal ",
      coords: [52.279724, 0.855404],
    },
    {
      title: "Weymouth, Lawrence McCarthy ",
      description: "Weymouth, Lawrence McCarthy ",
      coords: [50.6099306, -2.4546253],
    },
    {
      title: "Runcorn, Aquarius Metal Craft ",
      description: "Runcorn, Aquarius Metal Craft ",
      coords: [53.3505106, -2.6749284],
    },
    {
      title: "Huddersfield, Yorkshire Ironcraft ",
      description: "Huddersfield, Yorkshire Ironcraft ",
      coords: [53.645792, -1.785035],
    },
    {
      title: "New Malden, Universal Hardware Direct UK Ltd ",
      description: "New Malden, Universal Hardware Direct UK Ltd ",
      coords: [51.4020122, -0.271013],
    },
    {
      title: "Lytham St Annes, The Forge at Lytham ",
      description: "Lytham St Annes, The Forge at Lytham ",
      coords: [53.7370982, -2.9670503],
    },
    {
      title: "Sharnbrook, The Gate Installation Company",
      description: "Sharnbrook, The Gate Installation Company",
      coords: [52.2218976, -0.5224431],
    },
    {
      title: "Luton, Kensington Traders LTD.",
      description: "Luton, Kensington Traders LTD.",
      coords: [51.914669, -0.4784211],
    },
    {
      title: "Cradley Heath, Brooks Forgings",
      description: "Cradley Heath, Brooks Forgings",
      coords: [52.4851159, -2.0635516],
    },
    {
      title: "Hunstanton, ACF Group",
      description: "Hunstanton, ACF Group",
      coords: [52.9389139, 0.491032],
    },
    {
      title: "London, Aqa Studio",
      description: "London, Aqa Studio",
      coords: [51.5214442, -0.2031387],
    },
    {
      title: "Oldham, Fencing Mart Ltd.",
      description: "Oldham, Fencing Mart Ltd.",
      coords: [53.5447644, -2.1017744],
    },
    {
      title: "Beckenham, Capital Metal Ltd.",
      description: "Beckenham, Capital Metal Ltd.",
      coords: [51.40817, -0.025813],
    },
    {
      title: "Brownhills, Barclay & Mathieson Ltd.",
      description: "Brownhills, Barclay & Mathieson Ltd.",
      coords: [52.989184, -1.176115],
    },
    {
      title: "Long Preston, Tikeh Ltd.",
      description: "Long Preston, Tikeh Ltd.",
      coords: [54.019551, -2.2515009],
    },
    {
      title: "London, Porfan Metalwork Ltd.",
      description: "London, Porfan Metalwork Ltd.",
      coords: [51.5291279, -0.2418237],
    },
    {
      title: "Oldham, Multiabbey Trading Ltd.",
      description: "Oldham, Multiabbey Trading Ltd.",
      coords: [53.5409298, -2.1113659],
    },
    {
      title: "London, The Iron Age Metalworks.Ltd.",
      description: "London, The Iron Age Metalworks.Ltd.",
      coords: [51.4240307, -0.1414386],
    },
    {
      title: "Norfolk, Ev-Group Ltd.",
      description: "Norfolk, Ev-Group Ltd.",
      coords: [52.667949577227695, 1.261078133158187],
    },
    {
      title: "Cradley Heath, Brooks Forgings",
      description: "Cradley Heath, Brooks Forgings",
      coords: [52.4851159, -2.0635516],
    },
    {
      title: "London, Metalworks London",
      description: "London, Metalworks London",
      coords: [51.5238369, -0.2015404],
    },
    {
      title: "London, Unique Metal Fabrications",
      description: "London, Unique Metal Fabrications",
      coords: [51.6077344, -0.0759591],
    },
    {
      title: "PAIGNTON, EVADOR",
      description: "PAIGNTON, EVADOR",
      coords: [50.43508, -3.564235],
    },
    {
      title: "London, Arc Design and Construction",
      description: "London, Arc Design and Construction",
      coords: [51.5072178, -0.1275862],
    },
    {
      title: ", B.Rourke & Co.Ltd.",
      description: ", B.Rourke & Co.Ltd.",
      coords: [53.7857829, -2.276205],
    },
    {
      title: "London, Metalwork LONDON Arcoming",
      description: "London, Metalwork LONDON Arcoming",
      coords: [51.5238369, -0.2015404],
    },
    {
      title: "Cradley Heath, Artistic Ironwork Supplies",
      description: "Cradley Heath, Artistic Ironwork Supplies",
      coords: [52.4748304, -2.0570584],
    },
    {
      title: "Boldon Colliery, A B C Wrought Iron Gates ",
      description: "Boldon Colliery, A B C Wrought Iron Gates ",
      coords: [54.950456, -1.469053],
    },
  ];
locations.forEach((location) => {
  const marker = L.marker(location.coords).addTo(map);
  marker.bindPopup(`<b>${location.title}</b><br>${location.description}`);
});

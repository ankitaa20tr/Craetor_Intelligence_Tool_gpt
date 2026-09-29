const ICONS = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 17l5-5 4 3 7-9"/><path d="M15 6h4v4"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 20v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 20v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3l1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3zM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15zM19 14l.7 1.3L21 16l-1.3.7L19 18l-.7-1.3L17 16l1.3-.7L19 14z"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',
  nodes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7 6h10M6 8l5 8M18 8l-5 8"/></svg>',
  ask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4z"/><path d="M8 9h8M8 13h5"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 9l5 5 5-5"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 8a6 6 0 00-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
  down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M18 13l-6 6-6-6"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"/></svg>',
  more: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>',
  bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 3h12v18l-6-4-6 4z"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12l4 4L19 6"/></svg>',
  shift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 17l6-6 4 4 8-9"/><path d="M16 6h5v5"/></svg>'
};

const C = (name, platform, audience, frequency, recent, performance, shift, topics, color) => ({name, platform, audience, frequency, recent, performance, shift, topics, color});
const T = (name, score, state, why, platforms, values, velocity) => ({name, score, state, why, platforms, values, velocity});
const O = (name, score, crowd, why, now, angle, demand, coverage) => ({name, score, crowd, why, now, angle, demand, coverage});
const I = (title, hook, angle, platform, format, why, source) => ({title, hook, angle, platform, format, why, source});

const nicheData = {
  AI: {
    color: '#d3ff3f',
    topics: [
      T('AI agents that use computers', 94, 'Rising', 'New agent releases can now operate browsers, spreadsheets, and desktop apps with less supervision.', ['YT','TT','X'], [31,35,38,46,51,67,82,94], '+38%'),
      T('Local AI on consumer hardware', 87, 'Rising', 'Smaller open models and new laptop chips are making private, offline AI practical.', ['YT','X','IG'], [28,32,41,48,57,63,74,87], '+29%'),
      T('AI coding workflows', 81, 'Peaking', 'Creators are comparing agentic IDEs and showing complete products built from prompts.', ['YT','X'], [38,49,56,69,77,84,85,81], '+8%'),
      T('Synthetic media detection', 72, 'Rising', 'High-profile deepfakes are pulling verification tools into mainstream conversation.', ['X','TT','YT'], [21,24,29,33,43,55,64,72], '+42%'),
      T('Prompt engineering tips', 46, 'Falling', 'Audience attention is moving from prompt lists toward repeatable systems and agent workflows.', ['IG','TT'], [78,73,67,63,58,53,49,46], '-21%')
    ],
    opportunities: [
      O('The hidden cost of AI agents', 92, 'Low', 'Agent demos are everywhere, but almost no major creator is measuring token cost, retries, and human review time.', 'Search volume rose 41% after the latest agent launches while creator coverage remains at 18%.', 'Run the same real business task through three agents and publish the full cost ledger.', 91, 18),
      O('Private AI for non-technical teams', 86, 'Low–medium', 'Interest in local models is rising, yet most coverage assumes a developer audience.', 'New one-click runtimes have removed much of the setup friction this month.', 'Show a marketer or researcher running a private workflow without writing code.', 84, 27),
      O('Who verifies AI-generated research?', 78, 'Low', 'Deep research tools are growing quickly while verification practice remains thin and fragmented.', 'Recent public errors have made trust a practical audience concern rather than an abstract debate.', 'Audit one AI research report source by source and create a repeatable verification checklist.', 76, 21)
    ],
    creators: [
      C('Maya Chen', 'YT', '1.8M', '3 / week', 'I Let 5 AI Agents Run My Company for 24 Hours', '2.6× avg', 'Moving from tool reviews to high-stakes experiments', ['AI agents','Automation'], '#7357d6'),
      C('Future Proof', 'YT', '940K', '2 / week', 'The Laptop That Runs AI Without the Cloud', '1.9× avg', 'More hardware-led explainers; titles are getting shorter', ['Local AI','Hardware'], '#1d7c72'),
      C('Build Mode', 'X', '620K', '14 / week', 'A full CRM built by agents — architecture thread', '3.1× avg', 'Publishing build logs instead of launch announcements', ['AI coding','Agents'], '#b36335'),
      C('Nora Explains', 'TT', '2.3M', '6 / week', 'Your AI summary might be inventing its sources', '2.2× avg', 'Trust and safety explainers now make up half of posts', ['Verification','Deepfakes'], '#b34566'),
      C('Signal & Syntax', 'YT', '410K', '1 / week', 'I Replaced My $240/Month AI Stack', '1.7× avg', 'More cost comparisons and fewer tutorials', ['AI tools','Cost'], '#466db2'),
      C('The Model Brief', 'IG', '780K', '5 / week', '7 AI launches you missed this week', '1.4× avg', 'Carousel recaps are replacing single-news posts', ['AI news','Models'], '#586b3e')
    ],
    ideas: [
      I('I Gave 3 AI Agents the Same Job — Here’s the Real Bill', 'The cheapest agent made the most expensive mistake.', 'Benchmark cost, completion time, and human cleanup on one realistic task.', 'YouTube', '10–12 min benchmark', 'It answers the cost question competitors are skipping while agent interest is at a 94 momentum score.', 'Hidden cost of AI agents'),
      I('Your Next AI Workflow Should Never Touch the Cloud', 'What if your most useful AI tool had no account, no API key, and no data leak?', 'Set up a private research workflow for a non-technical operator.', 'YouTube', '8 min practical demo', 'Local AI is rising fast, but current videos speak almost exclusively to developers.', 'Private AI for teams'),
      I('The 60-Second AI Source Audit', 'This one check catches the most convincing AI hallucinations.', 'Demonstrate a three-step verification pattern using a current AI-generated report.', 'TikTok', '45–60 sec tutorial', 'Short trust explainers are outperforming and synthetic media detection is accelerating.', 'AI research verification'),
      I('AI Coding Is Peaking. Here’s What Comes After It.', 'The next edge is not writing code faster—it is knowing what the agent got wrong.', 'Move the conversation from generation speed to evaluation, observability, and maintenance.', 'X', '8-post visual thread', 'It enters a crowded topic through an under-covered second-order consequence.', 'AI coding workflows'),
      I('I Tried Running a Week of Work on a $799 Local AI Laptop', 'No cloud, no subscriptions, no excuses—can local AI survive a real workweek?', 'A constraint-based diary with daily wins, failures, and privacy tradeoffs.', 'YouTube', '15 min documentary', 'It combines the local AI rise with the experiment format that is breaking out across the watchlist.', 'Local AI on hardware')
    ],
    patterns: [
      ['Format shift','Experiment-led videos are outperforming tutorials','Four of six tracked creators used a challenge or benchmark format this week. Their median view velocity was 1.8× higher.','Turn the next tutorial into a measured test with a visible result.',91],
      ['Topic convergence','Three creators moved into local AI within 72 hours','The same privacy and cost framing appeared across YouTube, X, and Instagram.','Demand is validated, but the obvious “how to run locally” angle will crowd quickly.',86],
      ['Packaging','Short, consequence-first titles are spreading','Titles under 52 characters gained 24% more first-day views than long explanatory titles.','Lead with the surprising outcome; move the tool name to the thumbnail or description.',79]
    ],
    stop: ['Stop publishing undifferentiated tool roundups','Generic “10 new AI tools” posts are losing momentum and create little returning-viewer intent. Replace them with one tested workflow or a defensible benchmark.']
  },
  Finance: {
    color: '#5ae5d5',
    topics: [
      T('Private credit for retail investors',93,'Rising','New access products are bringing a once-institutional asset class to everyday investors.',['YT','X'],[22,27,31,42,57,66,81,93],'+46%'),
      T('AI infrastructure capex',88,'Rising','Markets are scrutinizing whether record data-center spending can produce durable returns.',['YT','X','IG'],[33,38,45,53,61,70,80,88],'+31%'),
      T('Rate-cut portfolio resets',79,'Peaking','Investors are repositioning cash, bonds, and growth exposure around shifting cut expectations.',['YT','TT','X'],[41,48,58,67,75,82,81,79],'+6%'),
      T('Prediction markets',74,'Rising','Event contracts are moving from political novelty to a broader information product.',['X','YT'],[18,23,28,32,45,56,67,74],'+39%'),
      T('Passive income stacks',43,'Falling','High-yield promise content is facing audience fatigue and lower trust.',['TT','IG'],[72,68,63,57,52,49,45,43],'-24%')
    ],
    opportunities: [
      O('What private credit hides',91,'Low','Creators explain the yield but rarely stress-test liquidity, valuation, and default assumptions.','Retail access is expanding faster than audience understanding.', 'Compare redemption rules and loss scenarios across three retail products.',90,19),
      O('The AI capex scorecard',85,'Medium','News coverage tracks spending totals without a simple framework for revenue payback.','The next earnings cycle will provide fresh numbers and natural update moments.','Rank major spenders by capex growth, AI revenue, and implied payback period.',88,34),
      O('Prediction markets as a research tool',77,'Low','Most coverage focuses on betting rather than how probability changes can sharpen analysis.','More non-political markets are adding useful real-time signals.','Use one live market to show what prices reveal—and where they mislead.',73,17)
    ],
    creators: [
      C('The Rational Ledger','YT','1.2M','2 / week','Private Credit: The 10% Yield Nobody Explains','2.4× avg','More risk breakdowns and fewer stock picks',['Private credit','Risk'],'#2b6f65'),
      C('Market Minute','TT','3.1M','9 / week','Why AI spending just changed your portfolio','1.8× avg','Leaning into 45-second chart explainers',['AI capex','Stocks'],'#87484e'),
      C('Compound Daily','X','880K','18 / week','The hyperscaler capex chart investors need','2.7× avg','Threads now open with proprietary charts',['Markets','AI'],'#5f5c98'),
      C('Clara on Capital','YT','640K','1 / week','I Moved $100K Out of Cash—Here’s Why','1.6× avg','Using personal portfolio decisions as narrative',['Rates','Bonds'],'#a27635'),
      C('Plain Money','IG','1.4M','5 / week','Private markets are coming for your 401(k)','1.9× avg','More contrarian carousels',['Private markets','Retirement'],'#35628d'),
      C('Edge Case Finance','YT','350K','2 / week','Can Prediction Markets Beat Wall Street?','2.1× avg','Testing alternative data in public experiments',['Prediction markets','Data'],'#6d873d')
    ],
    ideas: [
      I('I Stress-Tested the 10% Private Credit Yield','The yield is real. The exit might not be.','Model a recession and redemption rush across three accessible products.','YouTube','12 min teardown','It supplies the downside analysis missing from a 93-score trend.','What private credit hides'),
      I('Which AI Spender Earns Its Billions Back First?','Four companies are spending like the future is guaranteed. The math disagrees.','Build a transparent capex-to-revenue scorecard.','YouTube','9 min data story','The earnings cycle gives this repeatable relevance and a concrete ranking.','AI capex scorecard'),
      I('Prediction Markets Are Better Than Polls—Until This Happens','A 70% probability can still be bad information.','Explain liquidity, participant bias, and resolution risk with one live market.','X','Visual thread','It reframes a rising topic through financial literacy instead of gambling.','Prediction markets'),
      I('Your Cash Position Has an Expiration Date','The trade that felt safest last year may now be the hidden risk.','Show three portfolio reset paths for different time horizons.','Instagram','7-slide carousel','Rate-cut content is peaking; a decision framework can outlast news reactions.','Rate-cut reset'),
      I('The New “Passive Income” Product I Wouldn’t Buy','High yield is not passive when the fine print locks the door.','Audit liquidity and fees behind a viral income product.','TikTok','60 sec red-flag review','It catches declining passive-income interest with a sharp trust angle.','Private credit risk')
    ],
    patterns: [
      ['Topic convergence','Private credit appeared across four watchlist feeds','Coverage volume tripled, but only one creator discussed liquidity constraints.','Publish the risk-first piece before explainers saturate the topic.',89],
      ['Visual pattern','Single-chart explainers are winning on mobile','Posts built around one annotated chart held 31% more viewers through the end.','Design around one surprising data relationship, then narrate it.',84],
      ['Strategy shift','Personal portfolio stories are replacing forecasts','Creators using a disclosed decision are beating prediction-led videos by 1.5×.','Frame analysis around a real choice and show the decision rules.',78]
    ],
    stop: ['Stop leading with rate predictions','The strongest tracked content helps viewers make a decision across scenarios. Point forecasts are crowded and age quickly.']
  },
  Fitness: {
    color: '#ff8d6b',
    topics: [
      T('Walking with weighted vests',91,'Rising','Low-impact conditioning and wearable load are crossing from rehab into mainstream routines.',['TT','IG','YT'],[24,31,38,46,59,69,82,91],'+44%'),
      T('Sleep regularity over duration',86,'Rising','New research summaries are shifting attention from eight-hour targets to consistent schedules.',['YT','IG','X'],[29,35,41,52,61,70,80,86],'+34%'),
      T('Hybrid athlete programming',78,'Peaking','Strength-plus-endurance plans remain strong but programming advice is converging.',['YT','IG'],[44,53,62,70,76,81,80,78],'+5%'),
      T('Grip strength and longevity',71,'Rising','A simple, measurable marker is appearing in longevity and training conversations.',['TT','YT'],[17,22,26,34,43,54,63,71],'+37%'),
      T('Cold plunge routines',39,'Falling','Novelty is fading as creators revisit weak claims and interference with training.',['IG','TT'],[75,68,61,55,50,46,42,39],'-29%')
    ],
    opportunities: [
      O('Weighted vest dosing',90,'Low','Most viral posts say to add a vest without explaining load, duration, or who should avoid it.','Interest is surging before evidence-based protocols have become common.','Test 5%, 10%, and 15% bodyweight across pace, heart rate, and comfort.',89,16),
      O('Fixing an irregular sleep schedule',84,'Low–medium','Creators cite sleep consistency but offer few protocols for shift workers and parents.','The insight is mainstreaming; the practical implementation layer is still open.','Run a seven-day schedule reset with realistic constraints.',86,28),
      O('Grip strength for desk workers',76,'Low','Longevity content explains the correlation but rarely translates it into a minimal routine.','Cheap dynamometers make progress easy to demonstrate on camera.','Build a four-week, five-minute protocol and publish the measurements.',72,14)
    ],
    creators: [
      C('Motion Lab','YT','1.6M','2 / week','I Walked With a Weighted Vest for 30 Days','2.8× avg','More measured self-experiments',['Walking','Conditioning'],'#9f503a'),
      C('Strong Enough','IG','980K','6 / week','Your sleep timing matters more than Saturday’s lie-in','1.7× avg','Carousels now cite one study per claim',['Sleep','Recovery'],'#506e98'),
      C('Dr. Mira Moves','TT','2.7M','7 / week','Can grip strength predict how long you live?','2.4× avg','Moving toward longevity explainers',['Longevity','Mobility'],'#80558e'),
      C('Hybrid Field','YT','520K','1 / week','The Hybrid Plan I Wish I Started With','1.3× avg','Fewer elite plans, more beginner modifications',['Hybrid training','Running'],'#657c36'),
      C('Rep by Rep','X','340K','12 / week','Cold plunges after lifting: the tradeoff chart','2.0× avg','Evidence threads are replacing hot takes',['Recovery','Strength'],'#33777d'),
      C('Everyday Engine','IG','1.1M','5 / week','Zone 2 without a heart-rate monitor','1.5× avg','More no-equipment accessible advice',['Cardio','Habits'],'#a57a35')
    ],
    ideas: [
      I('How Heavy Should Your Walking Vest Actually Be?','Most people copy the weight. Almost nobody measures the cost.','Compare three loads using pace, heart rate, joint comfort, and next-day recovery.','YouTube','10 min field test','It adds the missing dosing detail to the week’s fastest-growing fitness trend.','Weighted vest dosing'),
      I('I Fixed My Sleep Timing Without Getting More Sleep','I kept the same seven hours—and changed how rested I felt.','Document a seven-day regularity protocol for a busy schedule.','YouTube','8 min diary','It turns emerging research into a practical outcome viewers can copy.','Sleep regularity'),
      I('The 5-Minute Grip Test Every Desk Worker Should Try','Your hands can reveal what your gym routine is missing.','Test baseline strength, teach a minimal routine, and define retest targets.','TikTok','60 sec test','Grip interest is rising with very little applied content.','Grip strength'),
      I('Hybrid Training Has a Recovery Problem','Training for everything works—until Tuesday ruins Thursday.','Map the common interference pattern and rebuild one popular weekly plan.','Instagram','8-slide breakdown','The broad topic is peaking, so a specific corrective angle has room.','Hybrid programming'),
      I('I Quit Cold Plunging After Workouts for 30 Days','The recovery habit might be muting the adaptation you trained for.','Track performance and soreness after moving cold exposure away from lifting.','YouTube','12 min experiment','It gives a useful counter-cycle angle as the topic declines.','Cold plunge decline')
    ],
    patterns: [
      ['Format shift','Measured 30-day tests are breaking out','Three tracked creators published self-experiments; median completion rate rose 22%.','Build visible measurement and weekly checkpoints into the next challenge.',92],
      ['Topic convergence','Longevity markers are entering training feeds','Grip strength and sleep regularity now appear outside dedicated longevity accounts.','Translate biomarkers into simple behaviors before generic lists arrive.',85],
      ['Credibility','On-screen study citations are spreading','Evidence-labeled carousels saved 1.7× more often than advice-only posts.','Show the source at the exact moment you make the claim.',80]
    ],
    stop: ['Stop treating recovery tools as universal','Audience response is shifting toward protocols with timing, dosage, and tradeoffs. Add the conditions under which advice changes.']
  },
  Tech: {
    color: '#6ba5ff',
    topics: [
      T('Repairable laptops',92,'Rising','New modular hardware and right-to-repair changes are renewing interest in ownership longevity.',['YT','X'],[28,33,39,49,58,70,82,92],'+40%'),
      T('Post-smartphone interfaces',85,'Rising','Wearables, pins, glasses, and voice interfaces are competing to define ambient computing.',['YT','TT','X'],[25,31,36,45,54,64,76,85],'+35%'),
      T('On-device AI chips',80,'Peaking','New devices are making neural performance a headline spec, though use cases lag benchmarks.',['YT','IG','X'],[42,51,60,69,77,83,82,80],'+7%'),
      T('Home lab mini servers',73,'Rising','Cheaper compact hardware is pulling self-hosting beyond the enthusiast niche.',['YT','X'],[19,25,30,38,46,57,66,73],'+33%'),
      T('Annual phone upgrades',42,'Falling','Incremental hardware changes and longer support cycles are reducing upgrade urgency.',['YT','IG'],[70,66,61,57,52,48,45,42],'-22%')
    ],
    opportunities: [
      O('The five-year laptop test',91,'Low','Reviews optimize for launch week while buyers increasingly care about repair cost and long-term support.','Repairability is moving into mainstream buying criteria.', 'Score current laptops on parts, battery, ports, software, and five-year cost.',92,20),
      O('Ambient tech in public',83,'Low','Most wearables are reviewed at a desk rather than tested in noisy, social, real-world settings.','The gap between demos and daily behavior is the central buyer question.','Test three interfaces through a commute, meeting, gym session, and dinner.',82,24),
      O('A useful home server under $300',79,'Medium','Self-hosting videos often become expensive rack tours that intimidate curious beginners.','Mini PCs now make starter setups small, quiet, and affordable.','Build one server around photos, backup, and a private assistant.',77,31)
    ],
    creators: [
      C('Circuit Review','YT','2.2M','2 / week','This Laptop Wants You to Repair It','2.5× avg','Adding long-term ownership scores',['Laptops','Repairability'],'#315c91'),
      C('Tomorrow Interface','YT','870K','1 / week','I Wore AI Glasses in Public for a Week','2.2× avg','More real-world diaries, fewer desk reviews',['Wearables','AI'],'#5d4f94'),
      C('Byte Sized','TT','3.4M','8 / week','Your phone’s new AI chip explained in 42 seconds','1.6× avg','Faster explainers with physical props',['Chips','Phones'],'#944d5c'),
      C('Home Stack','YT','460K','2 / week','My $249 Private Cloud Replaced 4 Subscriptions','3.0× avg','Beginner builds are replacing rack tours',['Home lab','Privacy'],'#317363'),
      C('Field Notes Tech','X','710K','15 / week','The real support-life table for 2026 laptops','1.9× avg','Original comparison tables drive more posts',['Ownership','Software'],'#7f6736'),
      C('Object Permanence','IG','620K','4 / week','Why I skipped another phone upgrade','1.5× avg','Sustainability now frames buying advice',['Phones','Sustainability'],'#4b7082')
    ],
    ideas: [
      I('The Laptop Review That Starts in Year Five','The best laptop today can still be the worst deal by 2031.','Rank repair access, parts cost, support life, and resale—not launch benchmarks.','YouTube','14 min buyer guide','It meets rising repairability interest with a differentiated evaluation model.','Five-year laptop test'),
      I('AI Glasses Survived My Desk. Then I Took Them Outside.','A perfect demo collapsed the moment another human entered the room.','Test ambient interfaces in noisy and socially awkward situations.','YouTube','10 min field diary','Real-world wearable tests are beating conventional reviews across the watchlist.','Ambient tech'),
      I('A Private Home Server for Less Than 3 Subscriptions','This tiny box pays for itself before the annual plans renew.','Build photos, backups, and local AI on one sub-$300 mini PC.','YouTube','12 min build','It makes an accelerating enthusiast topic accessible through cost.','Home server'),
      I('Stop Comparing AI Chips by TOPS','The biggest number on the spec sheet tells you almost nothing useful.','Compare task latency, battery drain, and which features stay on-device.','X','6-chart thread','It adds buyer meaning as raw on-device benchmark coverage peaks.','On-device AI chips'),
      I('The Best Phone Upgrade Is Keeping Yours','I priced the upgrade, then spent 8% of it fixing the thing I had.','Compare battery replacement, storage cleanup, and upgrade cost.','Instagram','7-slide carousel','It rides declining upgrade intent with a practical ownership story.','Phone upgrade decline')
    ],
    patterns: [
      ['Review format','Long-term cost scores are appearing in reviews','Three creators added repair, support, or subscription replacement math this week.','Ownership economics is becoming a primary buying criterion.',90],
      ['Format shift','Field diaries beat studio reviews','Real-world wearable videos averaged 2.1× baseline versus 1.2× for spec comparisons.','Put the product into situations where its social friction becomes visible.',87],
      ['Topic convergence','Home servers crossed into mainstream tech','Privacy and subscription fatigue are making self-hosting legible to non-enthusiasts.','Lead with the everyday job the server replaces, not the infrastructure.',82]
    ],
    stop: ['Stop opening with specification tables','Tracked audiences stay longer when the review starts with a real decision or failure. Move detailed specs behind the use case.']
  },
  Business: {
    color: '#b68cff',
    topics: [
      T('Founder-led distribution',94,'Rising','Buyers trust practitioner voices while paid acquisition becomes noisier and more expensive.',['X','YT','LI'],[30,35,42,51,63,74,86,94],'+43%'),
      T('AI-native service businesses',88,'Rising','Small teams are productizing workflows that used to require large agencies.',['YT','X','TT'],[25,29,38,48,58,69,79,88],'+38%'),
      T('Bootstrapped acquisitions',79,'Peaking','Operators are sharing small software deal structures and post-acquisition playbooks.',['X','YT'],[39,48,57,67,75,81,82,79],'+9%'),
      T('Community-led research',70,'Rising','Companies are turning customer communities into faster product and category intelligence.',['LI','X'],[18,22,27,34,43,53,63,70],'+32%'),
      T('Hustle productivity systems',37,'Falling','Audiences are rejecting maximalist routines in favor of narrower operating systems.',['IG','TT'],[71,65,59,53,48,44,40,37],'-31%')
    ],
    opportunities: [
      O('The founder distribution ledger',93,'Low','Advice is plentiful, but almost nobody publishes time spent, pipeline created, and posts that failed.','More founders are becoming creators without a way to measure the work.','Track 30 days of founder content against qualified pipeline—not impressions.',94,18),
      O('One-person AI service margins',87,'Low','Revenue screenshots hide software cost, review time, rework, and client acquisition effort.','AI-native service offers are multiplying before unit economics become transparent.','Reconstruct the true margin of a popular one-person agency offer.',88,22),
      O('Buying a tiny SaaS after the deal',76,'Medium','Acquisition coverage stops at closing while the first 100 operating days determine the outcome.','More public micro-acquisitions create followable case studies.','Create a post-close scorecard for churn, support debt, and owner dependency.',78,35)
    ],
    creators: [
      C('Operator Notes','X','690K','16 / week','30 days of founder content: the pipeline ledger','2.9× avg','Publishing operating data instead of advice',['Distribution','SaaS'],'#7750a4'),
      C('Small Team, Big Work','YT','510K','1 / week','Inside a 2-Person AI Agency Doing $80K/Month','2.3× avg','More unit-economics teardowns',['AI services','Agencies'],'#4a718a'),
      C('Margin Callers','YT','840K','2 / week','I Bought a Boring SaaS—90 Days Later','1.8× avg','Following businesses longitudinally',['Acquisitions','Operations'],'#986042'),
      C('Build in Public','LI','430K','5 / week','The founder-led growth dashboard we actually use','1.6× avg','More templates and fewer opinion posts',['B2B','Distribution'],'#396a9c'),
      C('One Good System','IG','1.1M','4 / week','Why your 14-step morning routine failed','2.0× avg','Anti-productivity framing is increasing',['Operations','Focus'],'#a74463'),
      C('Customer Zero','YT','290K','1 / week','We Let 50 Customers Choose Our Roadmap','1.7× avg','Community experiments drive the channel',['Research','Product'],'#4f7e51')
    ],
    ideas: [
      I('I Tracked Every Hour of Founder Content for 30 Days','The post with the most views generated zero pipeline.','Show creation time, distribution, qualified leads, and what failed.','YouTube','12 min operating report','It adds the missing economics to the strongest business trend.','Founder distribution ledger'),
      I('The $20K/Month AI Agency Making Less Than You Think','Revenue looks extraordinary until the rework column appears.','Rebuild margins including tools, QA, revisions, and acquisition.','YouTube','10 min teardown','Transparent unit economics are almost absent from a fast-rising business model.','AI service margins'),
      I('What Happens After You Buy a Tiny SaaS?','Closing the deal was the easy part. Day 12 found the real liability.','Build a first-100-days operating scorecard around a public acquisition.','X','10-post case thread','It extends a peaking topic into its least-covered phase.','Post-acquisition operations'),
      I('Turn 20 Customer Calls Into a Category Map','Your customers already know where the market is moving. Their answers are just unstructured.','Demonstrate a lightweight community research system.','LinkedIn','Document carousel','Community research is rising in a low-competition format.','Community-led research'),
      I('The Productivity System I Deleted','Every extra dashboard became a reason not to decide.','Audit a maximalist system and rebuild it around three weekly decisions.','Instagram','6-slide before/after','It meets the decline in hustle content with a credible counter-position.','Productivity decline')
    ],
    patterns: [
      ['Evidence shift','Operating ledgers are replacing advice threads','Posts with real inputs and outcomes averaged 2.4× the saves of generic frameworks.','Publish the messy numbers, including the work that did not pay off.',93],
      ['Topic convergence','AI agencies are moving from hype to margin scrutiny','Three creators mentioned QA cost or rework for the first time this week.','The next conversation will center on defensibility and economics.',86],
      ['Series pattern','Longitudinal business stories retain viewers','Follow-up episodes are beating standalone founder profiles by 39%.','Choose a company or experiment that can support three checkpoints.',81]
    ],
    stop: ['Stop publishing context-free frameworks','Audiences are rewarding operating evidence and real constraints. Attach the framework to one decision, number, or documented experiment.']
  },
  Gaming: {
    color: '#ff69c3',
    topics: [
      T('Player-made game economies',92,'Rising','Creator marketplaces and user-generated worlds are producing real careers—and new governance problems.',['YT','TT','X'],[27,32,40,49,61,72,84,92],'+41%'),
      T('Handheld PC optimization',87,'Rising','A growing device category has players trading visuals, battery life, and frame pacing.',['YT','X'],[31,38,44,53,62,72,81,87],'+33%'),
      T('Cozy games with hard systems',80,'Peaking','Relaxed aesthetics are merging with surprisingly deep management and survival mechanics.',['YT','TT','IG'],[40,48,57,66,74,82,83,80],'+7%'),
      T('Games as social spaces',72,'Rising','Players are returning to persistent worlds for concerts, hangouts, and community events.',['TT','YT'],[20,24,29,36,45,55,64,72],'+35%'),
      T('Live-service roadmaps',41,'Falling','Audience fatigue is growing around promises that depend on distant seasons and recurring monetization.',['YT','X'],[73,68,62,57,52,48,44,41],'-26%')
    ],
    opportunities: [
      O('Who owns a player-made economy?',90,'Low','Success stories dominate while platform risk, moderation labor, and revenue splits remain under-examined.','Several creator-made experiences have crossed into meaningful businesses.', 'Follow one creator economy dollar from player purchase to creator payout.',91,17),
      O('Handheld settings that feel better',85,'Medium','Most videos chase maximum FPS rather than input latency, frame consistency, and battery comfort.','More players own handheld PCs but lack a shared quality standard.','Build a “feels good” settings rubric across three popular games.',87,32),
      O('The cozy game difficulty curve',77,'Low','Coverage lists titles but rarely explains why deep systems can support relaxation instead of breaking it.','A new wave of releases is challenging the genre label.','Map how one game teaches complexity without creating pressure.',75,20)
    ],
    creators: [
      C('Patch Notes','YT','1.4M','3 / week','The Roblox Economy Nobody Talks About','2.7× avg','More economy and labor reporting',['UGC','Economies'],'#a44982'),
      C('Frame Chaser','YT','760K','2 / week','Stop Chasing 60 FPS on Handhelds','2.1× avg','Experience metrics replacing benchmark charts',['Handhelds','Performance'],'#345e91'),
      C('Soft Reset','TT','2.1M','8 / week','This cozy game is secretly brutal','1.9× avg','Genre-contradiction hooks are increasing',['Cozy games','Indies'],'#87713e'),
      C('World State','X','580K','20 / week','The revenue split inside player-made worlds','2.4× avg','Data threads now anchor weekly coverage',['Platforms','Creators'],'#5f4f98'),
      C('Party Queue','YT','390K','1 / week','We Went to a Concert Inside a Game','1.7× avg','More documentary-style community videos',['Social games','Communities'],'#357765'),
      C('No More Dailies','IG','840K','5 / week','Why I quit your favorite live-service game','1.6× avg','Player fatigue framing is growing',['Live service','Design'],'#9b4d42')
    ],
    ideas: [
      I('Where Does $10 Spent in a Player-Made Game Go?','The creator built the world. The platform still keeps most of the map.','Trace fees, payouts, labor, and platform risk through one purchase.','YouTube','12 min investigation','It adds hard economics to a 92-score trend with very little serious coverage.','Player economy ownership'),
      I('30 FPS Can Feel Better Than 60—Here’s the Setup','The frame counter improved while the game felt worse.','Compare frame pacing, latency, battery, and heat on three handheld profiles.','YouTube','9 min test','It challenges the crowded benchmark frame with a player-centered rubric.','Handheld feel'),
      I('Why Hard Cozy Games Still Feel Relaxing','This game gives you too much to do—and somehow removes the pressure.','Break down pacing, failure cost, sound, and player-directed goals.','TikTok','60 sec design essay','The contradiction is peaking and performs well in short-form hooks.','Cozy difficulty'),
      I('The Night a Game Became a Place','Nobody completed a quest. Thousands still logged in.','Document one player-run social event as a community story.','YouTube','10 min mini-doc','It humanizes a rising signal through a format underused by competitors.','Games as social spaces'),
      I('The Roadmap Feature Players No Longer Believe','A promise three seasons away is not retention—it is debt.','Audit delivery rates and community response across live-service roadmaps.','X','Data thread','It gives declining roadmap interest a timely accountability angle.','Live-service decline')
    ],
    patterns: [
      ['Coverage shift','Game economics is moving into mainstream channels','Four creators covered revenue splits, marketplaces, or creator labor this week.','The opening is a documented case, before broad explainers become common.',90],
      ['Metric shift','Experience quality is replacing maximum FPS','Handheld videos mentioning frame pacing and battery held attention 26% longer.','Evaluate the whole session, not one benchmark number.',85],
      ['Packaging','Genre contradictions are driving short-form hooks','“Cozy but hard” and “beautiful but hostile” hooks appeared in six breakout posts.','Find one honest contradiction that the footage proves immediately.',79]
    ],
    stop: ['Stop recapping live-service roadmaps at face value','Audience trust is shifting toward delivery audits and player impact. Compare promises with what shipped and how the community responded.']
  }
};

const state = {
  niche: localStorage.getItem('ci-niche') || 'AI',
  route: (location.hash || '#overview').slice(1),
  platform: 'All',
  watchSearch: '',
  savedIdeas: JSON.parse(localStorage.getItem('ci-saved-ideas') || '[]'),
  removedCreators: JSON.parse(localStorage.getItem('ci-removed-creators') || '{}'),
  customCreators: JSON.parse(localStorage.getItem('ci-custom-creators') || '{}')
};

const content = document.getElementById('app-content');
const drawer = document.getElementById('detail-drawer');
const drawerContent = document.getElementById('drawer-content');
const scrim = document.getElementById('scrim');
const askModal = document.getElementById('ask-modal');

function icon(name) { return ICONS[name] || ''; }
function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
}
function initials(name) { return name.split(/\s+/).map(x => x[0]).slice(0,2).join('').toUpperCase(); }
function activeData() { return nicheData[state.niche]; }
function currentCreators() {
  const removed = state.removedCreators[state.niche] || [];
  return [...activeData().creators.filter(c => !removed.includes(c.name)), ...(state.customCreators[state.niche] || [])];
}
function stateMarkup(status) {
  const cls = status.toLowerCase();
  return `<span class="state ${cls}">${icon(status === 'Falling' ? 'down' : 'up')}${status}</span>`;
}
function platformsMarkup(platforms) {
  return `<div class="platforms">${platforms.map(p => `<span class="platform-badge" title="${platformName(p)}">${p}</span>`).join('')}</div>`;
}
function platformName(p) { return ({YT:'YouTube',TT:'TikTok',IG:'Instagram',X:'X',LI:'LinkedIn'})[p] || p; }
function sparkline(values, cls = '') {
  const w = 75, h = 29, min = Math.min(...values) - 5, max = Math.max(...values) + 5;
  const pts = values.map((v,i) => `${(i/(values.length-1)*w).toFixed(1)},${(h-(v-min)/(max-min)*h).toFixed(1)}`);
  const area = `M${pts.join(' L')} L${w},${h} L0,${h} Z`;
  return `<svg class="sparkline ${cls}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><defs><linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs><path class="area" d="${area}"/><path class="line" d="M${pts.join(' L')}"/></svg>`;
}
function scoreBar(score) { return `<div class="score"><strong>${score}</strong><div class="score-bar"><span style="width:${score}%"></span></div></div>`; }
function pageHead(kicker,title,desc,actions='') {
  return `<div class="page-head"><div><span class="eyebrow">${kicker}</span><h1>${title}</h1></div>${actions ? `<div class="page-head-actions">${actions}</div>` : `<p>${desc}</p>`}</div>`;
}
function metricsMarkup() {
  const d=activeData(), rising=d.topics.filter(t=>t.state==='Rising').length, avg=Math.round(d.opportunities.reduce((a,o)=>a+o.score,0)/d.opportunities.length);
  return `<div class="metric-strip">
    <div class="metric"><span class="metric-label">Signal velocity</span><div class="metric-main"><strong>+${Math.round(d.topics[0].score/2)}%</strong><span class="metric-change">↑ 7D</span></div><div class="metric-detail">${d.topics[0].name} driving acceleration</div></div>
    <div class="metric"><span class="metric-label">Rising topics</span><div class="metric-main"><strong>${rising}</strong><span class="metric-change">of ${d.topics.length}</span></div><div class="metric-detail">Across ${[...new Set(d.topics.flatMap(t=>t.platforms))].length} active platforms</div></div>
    <div class="metric"><span class="metric-label">Opportunity index</span><div class="metric-main"><strong>${avg}</strong><span class="metric-change">HIGH</span></div><div class="metric-detail">Demand exceeds creator coverage</div></div>
    <div class="metric"><span class="metric-label">Watchlist velocity</span><div class="metric-main"><strong>1.8×</strong><span class="metric-change">+0.3</span></div><div class="metric-detail">Median breakout vs creator baseline</div></div>
  </div>`;
}

function changedSignals() {
  const d=activeData();
  return [
    {type:'Acceleration', icon:'up', cls:'', title:`${d.topics[0].name} jumped ${Math.round(d.topics[0].score/5)} points overnight`, detail:d.topics[0].why, time:'2h ago'},
    {type:'Breakout', icon:'eye', cls:'breakout', title:`${d.creators[0].name}'s latest post is running at ${d.creators[0].performance}`, detail:`“${d.creators[0].recent}” is the fastest start on your watchlist.`, time:'5h ago'},
    {type:'Format', icon:'spark', cls:'breakout', title:d.patterns[0][1], detail:d.patterns[0][2], time:'9h ago'},
    {type:'Decline', icon:'down', cls:'decline', title:`${d.topics[4].name} fell below baseline`, detail:d.topics[4].why, time:'1d ago'}
  ];
}
function changedMarkup() {
  return `<div class="changed-list">${changedSignals().map(x=>`<div class="changed-row"><span class="change-icon ${x.cls}">${icon(x.icon)}</span><span class="change-type">${x.type}</span><div class="change-copy"><strong>${x.title}</strong><small>${x.detail}</small></div><span class="change-time">${x.time}</span></div>`).join('')}</div>`;
}
function trendRows(topics=activeData().topics) {
  return topics.map((t,i)=>`<tr data-topic="${i}"><td class="topic-cell"><strong>${t.name}</strong><small>${t.why.split('.')[0]}</small></td><td>${scoreBar(t.score)}</td><td>${stateMarkup(t.state)}</td><td>${platformsMarkup(t.platforms)}</td><td>${sparkline(t.values,t.state.toLowerCase())}</td></tr>`).join('');
}
function trendTable(limit) {
  const topics = limit ? activeData().topics.slice(0,limit) : activeData().topics;
  return `<table class="trend-table"><thead><tr><th>Topic</th><th>Momentum</th><th>State</th><th>Platforms</th><th>7D signal</th></tr></thead><tbody>${trendRows(topics)}</tbody></table>`;
}
function opportunityFeature(o=activeData().opportunities[0], idx=0) {
  return `<div class="opportunity-feature"><span class="opportunity-rank">#${idx+1} highest-confidence gap</span><h3>${o.name}</h3><p>${o.why}</p><div class="gap-score-wrap"><div class="radial-score" style="--score:${o.score}"><strong>${o.score}</strong></div><div class="gap-score-copy"><strong>Opportunity score</strong><small>High demand · ${o.crowd} competition</small></div></div><div class="intel-points"><div class="intel-point"><span>Why now</span><strong>${o.now}</strong></div><div class="intel-point"><span>White space</span><strong>${o.angle}</strong></div></div><div class="coverage-meter"><div class="coverage-label"><span>Major creator coverage</span><span>${o.coverage}%</span></div><div class="meter"><span style="width:${o.coverage}%"></span></div></div></div>`;
}
function patternsStrip() {
  return `<section class="panel patterns-panel"><div class="panel-head"><span class="panel-kicker">Cross-watchlist</span><h2>Competitor pattern detection</h2><button class="text-button panel-action" data-route="patterns">See all patterns →</button></div><div class="pattern-grid">${activeData().patterns.map((p,i)=>`<div class="pattern-item" data-pattern="${i}"><div class="pattern-top"><span class="pattern-tag">${p[0]}</span><span class="confidence">${p[4]}% confidence</span></div><h3>${p[1]}</h3><p>${p[3]}</p></div>`).join('')}</div></section>`;
}
function renderOverview() {
  const d=activeData();
  content.innerHTML = `${pageHead('Daily intelligence · 26 Sep 2026',`${state.niche} market pulse`,`The few signals that changed what you should make next.`)}${metricsMarkup()}
  <div class="dashboard-grid">
    <section class="panel"><div class="panel-head"><h2>What Changed Since Yesterday?</h2><span class="count">4 signals</span></div>${changedMarkup()}</section>
    <section class="panel"><div class="panel-head"><span class="panel-kicker">Opportunity gap</span><button class="text-button panel-action" data-route="opportunities">View radar →</button></div>${opportunityFeature()}</section>
    <section class="panel"><div class="panel-head"><h2>Trending topics</h2><span class="count">${d.topics.length}</span><button class="text-button panel-action" data-route="trends">Open radar →</button></div>${trendTable(5)}</section>
    <section class="panel"><div class="panel-head"><span class="panel-kicker">Next best action</span></div><div class="opportunity-feature"><span class="opportunity-rank">Recommended for today</span><h3>${d.ideas[0].title}</h3><p>${d.ideas[0].hook}</p><div class="intel-points"><div class="intel-point"><span>Format</span><strong>${d.ideas[0].format} · ${d.ideas[0].platform}</strong></div><div class="intel-point"><span>Signal</span><strong>Connected to ${d.ideas[0].source}</strong></div></div><button class="button primary full-button" data-idea="0">Open content brief ${icon('arrow')}</button></div></section>
    ${patternsStrip()}
  </div>`;
  bindCommonCards();
}

function chartMarkup() {
  const topics=activeData().topics.slice(0,2), w=760,h=210,pad=26;
  const make=(vals)=>vals.map((v,i)=>`${pad+i*((w-pad*2)/(vals.length-1))},${h-pad-(v/100)*(h-pad*2)}`).join(' ');
  const areaPts=make(topics[0].values);
  const points=topics[0].values.map((v,i)=>{const x=pad+i*((w-pad*2)/(topics[0].values.length-1)),y=h-pad-(v/100)*(h-pad*2);return `<circle class="point" cx="${x}" cy="${y}" r="3"><title>${v} momentum</title></circle>`}).join('');
  return `<svg class="trend-chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><defs><linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${activeData().color}" stop-opacity=".18"/><stop offset="1" stop-color="${activeData().color}" stop-opacity="0"/></linearGradient></defs>${[25,50,75,100].map(v=>{const y=h-pad-(v/100)*(h-pad*2);return `<line class="gridline" x1="${pad}" x2="${w-pad}" y1="${y}" y2="${y}"/><text class="axis-label" x="0" y="${y+3}">${v}</text>`}).join('')}<path class="chart-area" d="M${areaPts.replaceAll(' ',' L')} L${w-pad},${h-pad} L${pad},${h-pad} Z"/><polyline class="chart-line" points="${areaPts}"/><polyline class="chart-line secondary" points="${make(topics[1].values)}"/>${points}${['F','S','S','M','T','W','T','F'].map((x,i)=>`<text class="axis-label" x="${pad+i*((w-pad*2)/7)}" y="${h-4}" text-anchor="middle">${x}</text>`).join('')}</svg>`;
}
function renderTrends() {
  const d=activeData();
  content.innerHTML = `${pageHead('Signal analysis','Trend radar',`Momentum blends search lift, social velocity, and watchlist coverage across ${state.niche}.`)}
  <div class="filterbar"><div class="filter-group">${['All','Rising','Peaking','Falling'].map(x=>`<button class="filter-pill trend-filter ${x==='All'?'active':''}" data-filter="${x}">${x}</button>`).join('')}</div></div>
  <div class="trend-layout"><section class="panel chart-panel"><div class="chart-head"><div><span class="eyebrow">Momentum index · 7 days</span><h2>${d.topics[0].name}</h2></div><div class="legend"><span><i></i>${d.topics[0].name}</span><span><i></i>${d.topics[1].name}</span></div></div>${chartMarkup()}</section>
  <section class="panel"><div class="panel-head"><h2>Signal notes</h2></div><div class="trend-detail-list">${d.topics.slice(0,3).map((t,i)=>`<div class="mini-topic" data-topic="${i}"><div class="mini-topic-top"><strong>${t.name}</strong>${stateMarkup(t.state)}</div><p>${t.why}</p></div>`).join('')}</div></section>
  <section class="panel trend-full-table"><div class="panel-head"><h2>All tracked topics</h2><span class="count">${d.topics.length}</span></div><div id="filtered-trends">${trendTable()}</div></section></div>`;
  document.querySelectorAll('.trend-filter').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.trend-filter').forEach(x=>x.classList.toggle('active',x===b));
    const topics=b.dataset.filter==='All'?d.topics:d.topics.filter(t=>t.state===b.dataset.filter);
    document.getElementById('filtered-trends').innerHTML=trendTableFor(topics);
    bindTopicRows(topics);
  }));
  bindTopicRows();
}
function trendTableFor(topics){ return `<table class="trend-table"><thead><tr><th>Topic</th><th>Momentum</th><th>State</th><th>Platforms</th><th>7D signal</th></tr></thead><tbody>${topics.map(t=>{const i=activeData().topics.indexOf(t);return `<tr data-topic="${i}"><td class="topic-cell"><strong>${t.name}</strong><small>${t.why.split('.')[0]}</small></td><td>${scoreBar(t.score)}</td><td>${stateMarkup(t.state)}</td><td>${platformsMarkup(t.platforms)}</td><td>${sparkline(t.values,t.state.toLowerCase())}</td></tr>`}).join('')}</tbody></table>`; }

function renderOpportunities() {
  const d=activeData();
  content.innerHTML=`${pageHead('Demand ÷ coverage','Opportunity gap','Topics with strong audience pull and unusually low coverage from major creators.')}
  <div class="opportunity-grid">${d.opportunities.map((o,i)=>`<article class="opportunity-card" data-opportunity="${i}"><span class="opportunity-rank">#${i+1} gap</span><div class="radial-score" style="--score:${o.score}"><strong>${o.score}</strong></div><h2>${o.name}</h2><p>${o.why}</p><div class="intel-points"><div class="intel-point"><span>Crowding</span><strong>${o.crowd}</strong></div><div class="intel-point"><span>Why now</span><strong>${o.now}</strong></div></div><button class="button">Explore the angle ${icon('arrow')}</button></article>`).join('')}</div>
  <section class="panel matrix-panel"><div class="matrix-title"><div><span class="eyebrow">Market map</span><h2>Demand vs creator coverage</h2></div><span class="eyebrow">Last 7 days</span></div><div class="matrix"><span class="matrix-quadrant q1">Open territory</span><span class="matrix-quadrant q2">Validated & crowded</span><span class="matrix-quadrant q3">Low priority</span>${d.opportunities.map((o,i)=>`<button class="matrix-point hot" data-opportunity="${i}" style="left:${o.coverage+8}%;bottom:${o.demand-4}%">${o.name}</button>`).join('')}${d.topics.slice(2).map((t,i)=>`<button class="matrix-point" data-topic="${i+2}" style="left:${52+i*13}%;bottom:${t.score-12}%">${t.name}</button>`).join('')}</div></section>`;
  bindOpportunityCards(); bindTopicRows();
}

function renderWatchlist() {
  const creators=currentCreators(), platforms=['All',...new Set(creators.map(c=>c.platform))];
  const filtered=creators.filter(c=>(state.platform==='All'||c.platform===state.platform)&&c.name.toLowerCase().includes(state.watchSearch.toLowerCase()));
  content.innerHTML=`${pageHead('Competitive intelligence','Creator watchlist','Track strategy changes, breakout posts, and topic movement.',`<button class="button primary" id="add-creator">${icon('plus')} Add creator</button>`)}
  <div class="filterbar"><div class="filter-group">${platforms.map(p=>`<button class="filter-pill platform-filter ${p===state.platform?'active':''}" data-platform="${p}">${p==='All'?'All platforms':platformName(p)}</button>`).join('')}</div><label class="search-box">${icon('search')}<input id="creator-search" value="${state.watchSearch}" placeholder="Search watchlist…"></label></div>
  <div class="watch-grid">${filtered.length?filtered.map((c,i)=>creatorCard(c,creators.indexOf(c))).join(''):`<div class="empty-state"><div><strong>No creators match this view</strong><p>Change the platform filter or search term.</p></div></div>`}</div>`;
  document.querySelectorAll('.platform-filter').forEach(b=>b.addEventListener('click',()=>{state.platform=b.dataset.platform;renderWatchlist()}));
  document.getElementById('creator-search').addEventListener('input',e=>{state.watchSearch=e.target.value;renderWatchlist();document.getElementById('creator-search')?.focus()});
  document.getElementById('add-creator').addEventListener('click',openAddCreator);
  document.querySelectorAll('[data-creator]').forEach(el=>el.addEventListener('click',()=>openCreator(Number(el.dataset.creator))));
}
function creatorCard(c,i){return `<article class="creator-row" data-creator="${i}"><div class="creator-head"><span class="creator-avatar" style="background:linear-gradient(135deg,${c.color},#18202a)">${initials(c.name)}</span><div><h3>${c.name}</h3><small>${c.audience} followers · ${c.topics.join(' / ')}</small></div><span class="creator-platform">${c.platform}</span></div><div class="creator-stats"><div class="creator-stat"><span>Frequency</span><strong>${c.frequency}</strong></div><div class="creator-stat"><span>Top content</span><strong>${c.performance}</strong></div><div class="creator-stat"><span>Primary topic</span><strong>${c.topics[0]}</strong></div></div><div class="recent-post"><div><span class="eyebrow">Latest signal</span><strong>${c.recent}</strong></div><span class="performance">${c.performance}</span></div><div class="strategy-shift">${icon('shift')}<span>${c.shift}</span></div></article>`}

function renderIdeas() {
  const d=activeData();
  content.innerHTML=`${pageHead('Signal → concept','Content ideas',`Every idea is tied to a live ${state.niche} signal or coverage gap.`)}
  <div class="filterbar"><div class="filter-group">${['All','YouTube','TikTok','Instagram','X','LinkedIn'].filter(x=>x==='All'||d.ideas.some(i=>i.platform===x)).map((p,i)=>`<button class="filter-pill idea-filter ${i===0?'active':''}" data-platform="${p}">${p}</button>`).join('')}</div></div><div class="ideas-grid" id="ideas-grid">${ideasMarkup(d.ideas)}</div>`;
  document.querySelectorAll('.idea-filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.idea-filter').forEach(x=>x.classList.toggle('active',x===b));const ideas=b.dataset.platform==='All'?d.ideas:d.ideas.filter(i=>i.platform===b.dataset.platform);document.getElementById('ideas-grid').innerHTML=ideasMarkup(ideas);bindIdeaActions();}));
  bindIdeaActions();
}
function ideasMarkup(ideas){return ideas.map((idea)=>{const original=activeData().ideas.indexOf(idea),saved=state.savedIdeas.includes(`${state.niche}:${idea.title}`);return `<article class="idea-card"><div class="idea-top"><span class="idea-number">${String(original+1).padStart(2,'0')}</span><span class="source-chip">${idea.source}</span><span class="platform-format">${idea.platform} · ${idea.format}</span></div><h2>${idea.title}</h2><div class="idea-detail"><span>Hook</span><p>${idea.hook}</p></div><div class="idea-detail"><span>Angle</span><p>${idea.angle}</p></div><div class="idea-detail"><span>Why it works</span><p>${idea.why}</p></div><div class="idea-actions"><button class="button primary" data-idea="${original}">Open brief ${icon('arrow')}</button><button class="button bookmark ${saved?'active':''}" data-save="${original}">${icon('bookmark')} ${saved?'Saved':'Save'}</button></div></article>`}).join('')}

function renderPatterns() {
  const d=activeData();
  content.innerHTML=`${pageHead('Cross-creator analysis','Competitor patterns','Repeated changes across the watchlist, and what they may mean for your next move.')}
  <div class="pattern-list">${d.patterns.map((p,i)=>`<article class="pattern-row"><span class="pattern-symbol">${icon(i===0?'trend':i===1?'nodes':'eye')}</span><div><span class="pattern-tag">${p[0]}</span><h2>${p[1]}</h2></div><div class="pattern-meaning"><span>What it could mean</span><p>${p[2]} ${p[3]}</p></div><div class="confidence-meter"><strong>${p[4]}% confidence</strong><div class="meter"><span style="width:${p[4]}%"></span></div></div></article>`).join('')}</div>`;
}

function renderBrief() {
  const d=activeData();
  content.innerHTML=`${pageHead('Week 39 · 21–27 September','Weekly brief',`A decision-ready summary of the ${state.niche} creator market.`, `<button class="button" id="brief-download">${icon('download')} Download brief</button>`)}
  <article class="brief"><header class="brief-cover"><div><span class="eyebrow">Creator Intelligence / ${state.niche}</span><h1>The Weekly Signal</h1><p>What moved, what opened up, and what to make next.</p></div><div class="brief-stamp"><strong>W39 / 2026</strong><span>CONFIDENTIAL DEMO</span></div></header><div class="brief-body">
  ${briefSection('5 biggest trends',d.topics.map((t,i)=>[t.name,`${t.score} · ${t.state.toUpperCase()}`]))}
  ${briefSection('3 emerging opportunities',d.opportunities.map(o=>[o.name,`${o.score} GAP SCORE`]))}
  ${briefSection('3 competitor moves',d.patterns.map(p=>[p[1],`${p[4]}% CONF.`]))}
  ${briefSection('5 recommended ideas',d.ideas.map(i=>[i.title,i.platform.toUpperCase()]))}
  <section class="brief-section"><h2>One thing to stop</h2><div class="stop-callout"><strong>${d.stop[0]}</strong><p>${d.stop[1]}</p></div></section></div></article>`;
  document.getElementById('brief-download').addEventListener('click',downloadBrief);
}
function briefSection(title,items){return `<section class="brief-section"><h2>${title}</h2><div class="brief-list">${items.map((x,i)=>`<div class="brief-item"><span>${String(i+1).padStart(2,'0')}</span><strong>${x[0]}</strong><em>${x[1]}</em></div>`).join('')}</div></section>`}

function render() {
  const valid=['overview','trends','opportunities','watchlist','ideas','patterns','brief'];
  if(!valid.includes(state.route)) state.route='overview';
  document.querySelectorAll('.nav-item[data-route]').forEach(n=>n.classList.toggle('active',n.dataset.route===state.route));
  ({overview:renderOverview,trends:renderTrends,opportunities:renderOpportunities,watchlist:renderWatchlist,ideas:renderIdeas,patterns:renderPatterns,brief:renderBrief})[state.route]();
  document.getElementById('current-niche').textContent=state.niche;
  document.getElementById('niche-orb').style.background=activeData().color;
  document.documentElement.style.setProperty('--accent',activeData().color);
  document.getElementById('nav-trend-count').textContent=activeData().topics.length;
  document.getElementById('nav-watch-count').textContent=currentCreators().length;
  hydrateIcons(content);
  content.focus({preventScroll:true});
}

function bindCommonCards(){ bindTopicRows(); bindOpportunityCards(); bindIdeaActions(); document.querySelectorAll('[data-pattern]').forEach(el=>el.addEventListener('click',()=>{state.route='patterns';location.hash='patterns'})); }
function bindTopicRows(){ document.querySelectorAll('[data-topic]').forEach(el=>el.addEventListener('click',()=>openTopic(Number(el.dataset.topic)))); }
function bindOpportunityCards(){ document.querySelectorAll('[data-opportunity]').forEach(el=>el.addEventListener('click',()=>openOpportunity(Number(el.dataset.opportunity)))); }
function bindIdeaActions(){
  document.querySelectorAll('[data-idea]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();openIdea(Number(el.dataset.idea))}));
  document.querySelectorAll('[data-save]').forEach(el=>el.addEventListener('click',()=>toggleSave(Number(el.dataset.save))));
}

function openDrawer(html){drawerContent.innerHTML=`<div class="drawer-inner">${html}</div>`;drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');scrim.classList.add('open');hydrateIcons(drawerContent);}
function closeDrawer(){drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');scrim.classList.remove('open');}
function openTopic(i){const t=activeData().topics[i];if(!t)return;openDrawer(`<span class="eyebrow">Trend intelligence</span><h2>${t.name}</h2><p class="drawer-lede">${t.why}</p><div class="drawer-big-score"><strong>${t.score}</strong><span>Momentum score<br>${t.velocity} in 7 days</span></div>${largeChart(t.values)}<div class="drawer-section"><h3>Signal state</h3>${stateMarkup(t.state)}</div><div class="drawer-section"><h3>Where it is moving</h3><div class="drawer-platforms">${t.platforms.map(p=>`<span>${platformName(p)}</span>`).join('')}</div></div><div class="drawer-section"><h3>Editorial read</h3><p>${t.state==='Falling'?'The broad topic is losing force. A counter-position or evidence-based retrospective can still work, but avoid a generic explainer.':t.state==='Peaking'?'The obvious angles are becoming crowded. Move one level deeper into consequences, failures, or a narrow use case.':'This signal still has room to compound. Publish a specific, evidence-led take before major creators standardize the angle.'}</p></div><button class="button primary full-button" id="topic-to-ideas">See connected content ideas ${icon('arrow')}</button>`);document.getElementById('topic-to-ideas').addEventListener('click',()=>{closeDrawer();state.route='ideas';location.hash='ideas'});}
function largeChart(values){const w=360,h=110,pts=values.map((v,i)=>`${i*w/(values.length-1)},${h-(v/100)*(h-12)}`).join(' ');return `<svg class="drawer-chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><line class="gridline" x1="0" y1="${h*.5}" x2="${w}" y2="${h*.5}"/><polyline points="${pts}"/></svg>`}
function openOpportunity(i){const o=activeData().opportunities[i];if(!o)return;openDrawer(`<span class="opportunity-rank">Opportunity gap · ${o.score}/100</span><h2>${o.name}</h2><p class="drawer-lede">${o.why}</p><div class="gap-score-wrap"><div class="radial-score" style="--score:${o.score}"><strong>${o.score}</strong></div><div class="gap-score-copy"><strong>Strong whitespace signal</strong><small>${o.crowd} crowding · ${o.coverage}% creator coverage</small></div></div><div class="drawer-section"><h3>Why it is emerging</h3><p>${o.now}</p></div><div class="drawer-section"><h3>The opening</h3><p>${o.angle}</p></div><div class="drawer-section"><h3>Timing read</h3><p>Audience demand is indexed at ${o.demand}, while major creator coverage is only ${o.coverage}%. That ${o.demand-o.coverage}-point spread is the core opportunity.</p></div><button class="button primary full-button" id="opp-to-ideas">Build from this signal ${icon('arrow')}</button>`);document.getElementById('opp-to-ideas').addEventListener('click',()=>{closeDrawer();state.route='ideas';location.hash='ideas'});}
function openIdea(i){const idea=activeData().ideas[i];if(!idea)return;openDrawer(`<span class="source-chip">Signal: ${idea.source}</span><h2>${idea.title}</h2><p class="drawer-lede">A ready-to-develop ${idea.platform} concept grounded in the current intelligence window.</p><div class="drawer-section"><h3>Opening hook</h3><p>“${idea.hook}”</p></div><div class="drawer-section"><h3>Content angle</h3><p>${idea.angle}</p></div><div class="drawer-section"><h3>Recommended execution</h3><p>${idea.format} for ${idea.platform}. Open on the result or tension, show the evidence early, then explain what changed.</p></div><div class="drawer-section"><h3>Why it could work</h3><p>${idea.why}</p></div><button class="button primary full-button" id="copy-brief">${icon('copy')} Copy content brief</button>`);document.getElementById('copy-brief').addEventListener('click',()=>copyText(`TITLE: ${idea.title}\nHOOK: ${idea.hook}\nANGLE: ${idea.angle}\nPLATFORM: ${idea.platform}\nFORMAT: ${idea.format}\nWHY NOW: ${idea.why}`,'Content brief copied'));}
function openCreator(i){const creators=currentCreators(),c=creators[i];if(!c)return;openDrawer(`<span class="eyebrow">Creator intelligence</span><div class="creator-head" style="margin-top:14px"><span class="creator-avatar" style="background:linear-gradient(135deg,${c.color},#18202a)">${initials(c.name)}</span><div><h2 style="margin:0">${c.name}</h2><small>${c.audience} followers · ${platformName(c.platform)}</small></div></div><div class="drawer-section" style="margin-top:22px"><h3>Recent content</h3><p>${c.recent}</p><span class="performance" style="display:block;margin-top:8px">${c.performance}</span></div><div class="drawer-section"><h3>Posting focus</h3><div class="drawer-platforms">${c.topics.map(x=>`<span>${x}</span>`).join('')}</div></div><div class="drawer-section"><h3>Upload frequency</h3><p>${c.frequency}</p></div><div class="drawer-section"><h3>Detected strategy change</h3><p>${c.shift}</p></div><button class="button full-button" id="remove-creator">Remove from watchlist</button>`);document.getElementById('remove-creator').addEventListener('click',()=>removeCreator(c));}

function openAddCreator(){
  if(currentCreators().length>=10){toast('Watchlist limit is 10 creators');return;}
  openDrawer(`<span class="eyebrow">Watchlist</span><h2>Add a creator</h2><p class="drawer-lede">Track a creator alongside the rest of your ${state.niche} market.</p><form id="creator-form"><div class="drawer-section"><h3>Creator name</h3><label class="search-box" style="width:100%;margin:0">${icon('users')}<input id="new-creator-name" required maxlength="40" placeholder="Creator or channel name"></label></div><div class="drawer-section"><h3>Primary platform</h3><div class="filter-group">${['YT','TT','IG','X'].map((p,i)=>`<button type="button" class="filter-pill add-platform ${i===0?'active':''}" data-platform="${p}">${platformName(p)}</button>`).join('')}</div></div><div class="drawer-section"><h3>Topic to monitor</h3><label class="search-box" style="width:100%;margin:0">${icon('search')}<input id="new-creator-topic" required maxlength="30" placeholder="e.g. ${activeData().topics[0].name}"></label></div><button type="submit" class="button primary full-button">${icon('plus')} Add to watchlist</button></form>`);
  let p='YT';document.querySelectorAll('.add-platform').forEach(b=>b.addEventListener('click',()=>{p=b.dataset.platform;document.querySelectorAll('.add-platform').forEach(x=>x.classList.toggle('active',x===b))}));
  document.getElementById('creator-form').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('new-creator-name').value.trim(),topic=document.getElementById('new-creator-topic').value.trim();if(!name||!topic)return;const custom=C(name,p,'New','Monitoring',`Waiting for ${platformName(p)} activity`,'Establishing baseline','Baseline learning in progress',[topic],'#526275');state.customCreators[state.niche]=[...(state.customCreators[state.niche]||[]),custom];saveState();closeDrawer();renderWatchlist();toast(`${name} added to your watchlist`)});
}
function removeCreator(c){
  const custom=state.customCreators[state.niche]||[];
  if(custom.some(x=>x.name===c.name))state.customCreators[state.niche]=custom.filter(x=>x.name!==c.name);else state.removedCreators[state.niche]=[...(state.removedCreators[state.niche]||[]),c.name];
  saveState();closeDrawer();renderWatchlist();toast(`${c.name} removed from your watchlist`);
}
function toggleSave(i){const idea=activeData().ideas[i],key=`${state.niche}:${idea.title}`;state.savedIdeas=state.savedIdeas.includes(key)?state.savedIdeas.filter(x=>x!==key):[...state.savedIdeas,key];saveState();renderIdeas();toast(state.savedIdeas.includes(key)?'Idea saved':'Idea removed from saved');}
function saveState(){localStorage.setItem('ci-niche',state.niche);localStorage.setItem('ci-saved-ideas',JSON.stringify(state.savedIdeas));localStorage.setItem('ci-removed-creators',JSON.stringify(state.removedCreators));localStorage.setItem('ci-custom-creators',JSON.stringify(state.customCreators));document.getElementById('nav-watch-count').textContent=currentCreators().length;}

function openAsk(){
  askModal.classList.add('open');askModal.setAttribute('aria-hidden','false');
  const conv=document.getElementById('conversation');
  if(!conv.children.length)conv.innerHTML=`<div class="message"><span class="assistant-icon">${icon('spark')}</span><div class="message-bubble">I’m reading the current <strong>${state.niche}</strong> signal set. Ask me what to make, what to avoid, or which competitor move matters.</div></div>`;
  document.getElementById('suggested-questions').innerHTML=['What should I make today?','What should I avoid?','What is growing early?','Who should I watch?'].map(q=>`<button class="suggestion">${q}</button>`).join('');
  document.querySelectorAll('.suggestion').forEach(b=>b.addEventListener('click',()=>askQuestion(b.textContent)));
  setTimeout(()=>document.getElementById('ask-input').focus(),50);
}
function closeAsk(){askModal.classList.remove('open');askModal.setAttribute('aria-hidden','true');}
function askQuestion(q){
  if(!q.trim())return;const conv=document.getElementById('conversation');conv.insertAdjacentHTML('beforeend',`<div class="message user"><div class="message-bubble">${escapeHtml(q)}</div></div><div class="message loading"><span class="assistant-icon">${icon('spark')}</span><div class="message-bubble loading-dots"><span></span><span></span><span></span></div></div>`);conv.scrollTop=conv.scrollHeight;document.getElementById('ask-input').value='';
  setTimeout(()=>{conv.querySelector('.loading')?.remove();conv.insertAdjacentHTML('beforeend',`<div class="message"><span class="assistant-icon">${icon('spark')}</span><div class="message-bubble">${answerQuestion(q)}<span class="citation">Based on 7-day demo signals · ${state.niche}</span></div></div>`);conv.scrollTop=conv.scrollHeight;},650);
}
function answerQuestion(q){
  const d=activeData(),s=q.toLowerCase();
  if(/avoid|everyone|crowd|overdone/.test(s))return `<strong>Avoid a broad “${d.topics[2].name} explained” post.</strong> The topic is already ${d.topics[2].state.toLowerCase()} and the obvious angles are converging. If you cover it, use this narrower opening: ${d.ideas[3].angle}`;
  if(/competitor|who|watch/.test(s))return `<strong>Watch ${d.creators[0].name}.</strong> “${d.creators[0].recent}” is performing at ${d.creators[0].performance}, and their strategy is shifting: ${d.creators[0].shift}. The move validates experiment-led packaging in this niche.`;
  if(/early|before|growing|mainstream/.test(s))return `<strong>${d.opportunities[2].name}</strong> is the earliest credible signal. Demand is indexed at ${d.opportunities[2].demand}, while major creator coverage is only ${d.opportunities[2].coverage}%. ${d.opportunities[2].now}`;
  if(/biggest|opportunity|week/.test(s))return `<strong>Your biggest opportunity is ${d.opportunities[0].name}.</strong> It scores ${d.opportunities[0].score}/100 with ${d.opportunities[0].crowd.toLowerCase()} crowding. The sharpest execution: ${d.opportunities[0].angle}`;
  return `<strong>Make “${d.ideas[0].title}” today.</strong> Open with: “${d.ideas[0].hook}” Use a ${d.ideas[0].format} on ${d.ideas[0].platform}. It connects the strongest trend (${d.topics[0].score}/100) with the least-covered practical question.`;
}

function downloadBrief(){
  const d=activeData();const text=`CREATOR INTELLIGENCE — ${state.niche.toUpperCase()} WEEKLY BRIEF\nWeek 39 · 21–27 September 2026\n\nBIGGEST TRENDS\n${d.topics.map((t,i)=>`${i+1}. ${t.name} — ${t.score}, ${t.state}`).join('\n')}\n\nEMERGING OPPORTUNITIES\n${d.opportunities.map((o,i)=>`${i+1}. ${o.name} — ${o.score}/100\n   ${o.now}`).join('\n')}\n\nCOMPETITOR MOVES\n${d.patterns.map((p,i)=>`${i+1}. ${p[1]}\n   ${p[3]}`).join('\n')}\n\nRECOMMENDED IDEAS\n${d.ideas.map((x,i)=>`${i+1}. ${x.title} (${x.platform})`).join('\n')}\n\nSTOP DOING\n${d.stop[0]}\n${d.stop[1]}\n`;
  const blob=new Blob([text],{type:'text/plain'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`creator-intelligence-${state.niche.toLowerCase()}-week-39.txt`;a.click();URL.revokeObjectURL(a.href);toast('Weekly brief downloaded');
}
function copyText(text,message){navigator.clipboard?.writeText(text).then(()=>toast(message)).catch(()=>toast('Brief ready to copy'));}
function escapeHtml(str){const d=document.createElement('div');d.textContent=str;return d.innerHTML;}
function toast(message){const wrap=document.getElementById('toast-stack'),el=document.createElement('div');el.className='toast';el.innerHTML=`${icon('check')}<span>${message}</span>`;wrap.appendChild(el);setTimeout(()=>el.remove(),2800);}

function setupNicheMenu(){
  const menu=document.getElementById('niche-menu');menu.innerHTML=Object.entries(nicheData).map(([name,d])=>`<button class="niche-option ${name===state.niche?'active':''}" role="option" data-niche="${name}"><span class="niche-orb" style="background:${d.color}"></span><span>${name}</span></button>`).join('');
  document.querySelectorAll('.niche-option').forEach(b=>b.addEventListener('click',()=>{state.niche=b.dataset.niche;state.platform='All';state.watchSearch='';saveState();menu.classList.remove('open');document.getElementById('niche-button').setAttribute('aria-expanded','false');setupNicheMenu();render();toast(`Switched intelligence to ${state.niche}`)}));
}
document.querySelectorAll('[data-route]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();state.route=el.dataset.route;location.hash=state.route;document.getElementById('sidebar').classList.remove('open');}));
window.addEventListener('hashchange',()=>{state.route=(location.hash||'#overview').slice(1);render()});
document.getElementById('niche-button').addEventListener('click',e=>{e.stopPropagation();const m=document.getElementById('niche-menu'),open=m.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open))});
document.addEventListener('click',e=>{if(!e.target.closest('.niche-control'))document.getElementById('niche-menu').classList.remove('open')});
document.getElementById('drawer-close').addEventListener('click',closeDrawer);scrim.addEventListener('click',()=>{closeDrawer();document.getElementById('sidebar').classList.remove('open')});
document.getElementById('ask-nav').addEventListener('click',openAsk);document.getElementById('ask-close').addEventListener('click',closeAsk);askModal.addEventListener('click',e=>{if(e.target===askModal)closeAsk()});
document.getElementById('ask-form').addEventListener('submit',e=>{e.preventDefault();askQuestion(document.getElementById('ask-input').value)});
document.getElementById('menu-button').addEventListener('click',()=>{document.getElementById('sidebar').classList.add('open');scrim.classList.add('open')});
document.getElementById('export-button').addEventListener('click',downloadBrief);
document.getElementById('notifications-button').addEventListener('click',()=>toast('3 new signals are included in “What Changed”'));
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openAsk()}if(e.key==='Escape'){closeDrawer();closeAsk();document.getElementById('niche-menu').classList.remove('open')}});

hydrateIcons();setupNicheMenu();render();

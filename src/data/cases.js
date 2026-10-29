// Case studies, keyed by WORK id. Cards without an entry fall back to "What I did" / "Result".
// Fields: problem, requirement?, others?, solution (string or [paragraphs]), points? ([{lead, text}] rendered inside solution), after?, result.

export const CASES = {
  "ring-pro": {
    problem: "A new flagship ring with nothing to sell it on. No page that explained why it existed, no way to take a pre-order in ten currencies, no place for a buyer to see where their order stood, and no email telling them what happens next. Launch day also needed campaigns and PR to land at the same hour as the product.",
    solution: "A landing page, a pricing page with a $349-to-$449 volume ladder and retroactive refunds, an order-tracking page with batch, ETA and trade-in status, and a pre-order confirmation email, so a buyer moves through the experience one step at a time. Waitlist reminders, a support channel and an FAQ around it. Launch campaigns and PR went out the hour the ring did.",
    result: "Over half of all ring orders since launch, at an order value 25% above Ring AIR. Ring AIR 2 is launching on the same setup.",
  },
  home: {
    problem: "Home had launched, but the landing page did not explain what a room monitor does for you, and the pricing page hid the membership. People looked and did not buy.",
    solution: "A pre-order launch with a three-day early-bird price, then a rebuilt landing page and pricing page: daily ambient-score cards, a room-by-room section, certifications and membership pricing in the open.",
    result: "Monthly orders 4× the five months before the rebuild.",
  },
  healthex: {
    problem: "Ultrahuman read sleep, glucose and blood every night, but nothing medical. A diagnosis, a prescription or a lab a doctor ordered never met the ring data. Worse, nothing that gets diagnosed ever gets measured again. A doctor names a condition in a twelve-minute visit and nobody checks it for six months.",
    requirement: "HealthEx was the fastest-growing records rail in the US, and the business wanted the partnership: consented access to members' records, US only, inside the Jade Pro bundle.",
    others: "Every other HealthEx client, Whoop included, put a chat window over the records. Ask a question, get a summary. Disconnect it and nothing the member looks at every morning changes.",
    solution: "The records are read against the ring, nightly, and sorted into three sections.",
    points: [
      { lead: "Worth a look.", text: "Anything in the ring data that disagrees with the record. Three blood-pressure drugs from two prescribers with only one coding hypertension. A urine protein result measured once and never rechecked." },
      { lead: "Never checked.", text: "A diagnosis that calls for a marker nobody has ordered. Six lipid panels and zero ApoB." },
      { lead: "Watching.", text: "The core of it. Every medication is held against resting heart rate, HRV and temperature from its dose date. We never say a drug is working. We show how the numbers moved, and give the member a question for the doctor." },
    ],
    after: "Records never change a score, a range or a goal. They explain. Medications, surgeries and labs refresh through the national TEFCA exchange and provider FHIR endpoints, and a Visit Pack PDF puts it all in the member's hand before the appointment.",
    result: "About 3,500 US activations since the 30 Sep 2026 launch, 20% fully connected, 10% in the first week.",
  },
  "hsa-blood-vision": {
    problem: "Americans hold about $174 billion in HSA accounts, pre-tax money that can only be spent on eligible health products, and not one dollar of it could reach Ultrahuman. Nothing we sold was certified eligible. Blood Vision was the natural product for it, and it lived on a separate Stripe-only site, outside the Shopify stores where payments were already solved.",
    solution: [
      "Eligibility first. I worked with Flex to get every product certified by SIGIS, the body that decides what HSA and FSA cards may buy. A month of submissions: what each product does, its GTINs, why it qualifies.",
      "Then distribution. \"Pay with HSA/FSA, powered by Flex\" on the pricing page, Flex as a payment method at Shopify checkout, and a Flex rail wired into the Stripe-only Blood Vision site so the same test, the same discounts and the same renewal ran on both. Each test split into two line items so the tax reporting held up. A renewal audit found memberships billed but never extended and fixed them. For the holiday sale, a direct HSA/FSA checkout for Ring PRO with a $100 coupon.",
    ],
    result: "About 20% of US Blood Vision revenue since July 2025.",
  },
  photon: {
    problem: "A red-light device in a category with strict medical claims rules, launching to a base that had only ever bought wearables.",
    solution: "Positioning and a landing page with legal-cleared copy, per-market pricing and offers, and an order feed with ETAs and returns run with support.",
    result: "About 55% of the first batch sold.",
  },
  "trade-in": {
    problem: "The first trade-in was a logistics product. Ship a return kit, wait for the member to leave the old ring at their door, chase the courier, receive it, inspect it, then release the credit. Weeks of ops per order, and the revenue it brought in never covered the cost of running it.",
    solution: "Remove the physical return entirely. Every ring carries a unique serial. The member enters theirs at checkout, our systems confirm the serial exists, is registered to that account, and has not been traded before, and the credit applies on the spot. The refund is instant. No kit, no courier, no warehouse. Trade-in became software, so it carried straight into the Ring PRO pre-order and into five more markets with no new ops in any of them.",
    result: "13% of web ring orders since the February relaunch, 25% in launch month, at zero logistics cost.",
  },
  betterhelp: {
    problem: "BetterHelp is the largest therapy platform in the US and wanted to go deeper with us than a discount link. Our members had nothing on mental health in the app, and a bare \"50% off therapy\" offer had nothing to anchor to.",
    solution: [
      "An in-app mental-health feature first. A new BetterHelp article every day on topics the member chooses, with 50% off a subscription attached.",
      "Then the revenue engine. A BetterHelp subscription is about $360, so $180 at half price, and each paid sign-up earned the member a reward: a free Ring AIR, free PowerPlugs, or dollars off Ring PRO. Per-member attribution links tied every sign-up back to the person who made it. A cross-sell journey on days 2, 7 and 14 after activation took members from reading to talking to someone. Ring PRO went up for sale on BetterHelp's therapist platform in return.",
    ],
    result: "About $120K in commission from roughly 590 paid sign-ups, revenue with no cost of goods behind it.",
  },
  "campaign-engine": {
    problem: "Every website campaign needed a PM, a web developer and a backend developer. Country discounts, homepage banners and go-live timing were all code changes. As campaigns multiplied, three people reviewing every banner became the bottleneck, and the business team could not move without us.",
    solution: "An internal engine the business team runs alone. Name the campaign, pick the product, choose what shows on the page, upload one of the pre-approved images, write the heading. Discounts by country and a scheduled go-live are fields, not tickets. Saving generates a test link so the owner sees it before anyone else does. Only \"Take live\" publishes. The guardrails came from real mistakes, a campaign went live unchecked early on, and each rule was handed to the specific person who runs that campaign.",
    result: "5,393 orders across 88 countries in its first run. Over 300 campaigns shipped by the business team since, with no engineer in the loop.",
  },
  "speedy-delivery": {
    problem: "A new ring was coming and India still held stock of the previous one. Clearing it needed a reason to buy now rather than wait, and the stock sat in six cities: Bengaluru, Pune, Hyderabad, Delhi, Noida and Gurugram.",
    solution: "Two-hour delivery from local kiosks in those cities. A pin-code check on the pricing page tells the buyer whether they qualify before they add to cart. The order confirmation email, the tracking page and WhatsApp updates all follow the two-hour promise with a live ETA, so the experience is consistent from pricing page to doorstep. The UAE version was built in a day for a creator launch, with four-hour slots in Dubai. Along the way I found and fixed a fulfilment push that was quietly holding orders for four hours.",
    result: "Chosen by 45% of India web ring orders since launch, 479 of 1,075.",
  },
  referral: {
    problem: "580K ring owners and a referral program with one reward at the end. Refer five friends, get a ring. Nobody felt progress before the fifth, so most stopped at one.",
    solution: "A five-step ladder with a reward at every rung, front-loaded with the highest perceived value so momentum starts early. Separate ladders for members who already owned the final reward. Migration rules for existing referrers: progress carried over, no retroactive payouts, so the people at four of five became the hottest leads on day one. Fraud checks for same-address and same-payment clusters. A six-stage funnel to see where referrals died.",
    result: "About 3% of ring orders over 13 months.",
  },
  birthday: {
    problem: "A birthday is the one day a member expects a brand to notice, and we did nothing.",
    solution: "A personal birthday page on any storefront with 15% off, live for two weeks. The discount switches off after that, the page stays up, so no link in an email ever dies.",
    result: "About 150 orders since August 2025.",
  },
  gifting: {
    problem: "Companies wanted to gift rings in bulk and individuals wanted to send one to a person, and the store could do neither. A bulk order shipping before the payment cleared was a real risk.",
    solution: "For companies, invoiced gifting by card, ACH or wire, released only when funds settle, with sizing-kit bundles priced in volume bands. For individuals, a gift card the sender can schedule to arrive at a chosen time, and the recipient picks their own size and colour.",
    result: "In build, not yet live.",
  },
  battery: {
    problem: "Ring AIR replacements were climbing. Digging into the returns, the top three or four causes shared a root: battery temperature. Above 40°C the charger overheated and stopped working, so members asked for a new charger, lost patience, and often sent the whole ring back instead.",
    solution: "Detect it before the member does. When a ring reports a high charge temperature, the app tells them so and a replacement charger ships proactively, before the charger dies and before the complaint. Ring PRO setup was rewritten after a protective film caused dead-on-arrival claims, and visible tape was added at the factory so the film gets removed.",
    result: "Charger swaps replaced ring replacements for the 25% of returns above 40°C, which cut replacement cost and refunds together.",
  },
  "canada-doa": {
    problem: "Refunds through Canadian retail partners were high, and the main reason was rings that never worked out of the box. Two thirds of six weeks of retail orders had never connected, and not one of those buyers had contacted support. They returned the ring to the store instead.",
    solution: "A dead-on-arrival ring can be spotted from the app alone: setup events that never complete and ring-health scores that never appear. Detection runs on those signals, a push goes out within an hour, and banners in the app point the member to support with a recovery flow instead of a refund desk.",
    result: "Recovery flows reached the first 214 members.",
  },
};

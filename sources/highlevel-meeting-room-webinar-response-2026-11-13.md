# HighLevel Meeting Rooms webinar reply — 2026-11-13

## Provenance
Reply pasted by Ivo from a public GoKollab thread on 2026-11-13, attributed to Praveen Gupta (Team kollab). The thread permalink was not provided.

## Verbatim response excerpt
> Thanks for sharing such detailed feedback! We’ve noted all these points.
>
> We’re already planning a **dedicated webinar UI and experience** to better support webinar use cases, including improved host controls and a smoother attendee experience. Your feedback will help us shape these improvements.
>
> Regarding the **meeting passcode**, it is only required for guests who are not logged in, and only when the meeting URL doesn't include the passcode (pwd parameter).
>
> If you share the complete meeting URL, guests can join without manually entering a passcode.

## Status interpretation
- A dedicated webinar UI/UX is **Planned** at the overall initiative level, with no date or exact individual feature scope committed.
- MR-211–MR-217 are **Acknowledged** because all points were noted, but their specific functionality was not promised.
- MR-218 is **Closed — Works as designed** because a complete invitation URL containing pwd bypasses the need for a manual guest prompt. This is not proof of a security flaw.
- Existing earlier item statuses are retained unless there is an exact matching commitment.
- Full meeting links containing pwd carry access credentials. Do not publish them.

"""Canonical product/area classification for HighLevel feedback.

Keep one canonical issue even when a request spans several product areas.
Each area is a GitHub label, used by the product-specific Kanban view.
"""
from __future__ import annotations

AREA_TO_PREFIXES = {
    "Meeting Rooms": ("MR-", "ZOOM-"),
    "Webinars": ("WEB-",),
    "Communities": ("COMM-",),
    "Courses": ("COURSE-",),
    "AI Studio": ("AI-",),
    "Email": ("EMAIL-",),
    "Funnels & Forms": ("FORMS-",),
    "Checkout & Orders": ("CHECKOUT-", "ORDERS-"),
    "Tracking": ("TRACKING-",),
    "Reporting": ("REPORT-",),
    "Platform & Builders": ("PLATFORM-", "BUILDER-"),
    "CRM & Workflows": ("CRM-",),
    "SaaS & Affiliates": ("SAAS-", "AFFILIATE-"),
    "Calendars & Events": (),
    "Media & Recordings": ("MEDIA-",),
    "Invoices & Documents": ("INVOICE-",),
    "Tasks & Helpdesk": ("TASK-",),
}

CROSS_AREA_IDS = {
    "Webinars": {
        "MR-007", "MR-101", "MR-104", "MR-106", "MR-107", "MR-108",
        "MR-145", "MR-160", "MR-161", "MR-162", "MR-163", "MR-164", "MR-165",
        "MR-203", "MR-209", "MR-211", "MR-212", "MR-213", "MR-214",
        "MR-215", "MR-216", "MR-217", "MR-218", "MR-219",
        "MR-220", "MR-221", "MR-222", "MR-223", "MR-224", "MR-225",
        "MR-220", "MR-221", "MR-222", "MR-223", "MR-224", "MR-225",
        "MR-220", "MR-221", "MR-222", "MR-223", "MR-224", "MR-225",
    },
    "Communities": {"MR-101", "MR-104", "MR-142", "WEB-001"},
    "Courses": {"AI-004", "COMM-003", "MR-101", "MR-104", "MR-141"},
    "AI Studio": {"EMAIL-004", "MR-007", "MR-145"},
    "Email": {"AI-002", "EMAIL-004"},
    "Funnels & Forms": {
        "CHECKOUT-001", "MR-101", "MR-214", "MR-215",
        "TRACKING-001", "TRACKING-007", "WEB-001",
    },
    "Checkout & Orders": {"CRM-001", "COMM-001", "COMM-005", "INVOICE-001", "SAAS-001", "TRACKING-004"},
    "Tracking": {"CRM-001", "MR-209", "REPORT-001", "REPORT-002"},
    "Reporting": {"CRM-001", "MR-209", "TRACKING-004", "TRACKING-005", "TRACKING-007"},
    "Platform & Builders": {"CRM-001", "AI-003", "MR-101", "MR-120", "MR-121", "TRACKING-001", "TRACKING-002"},
    "CRM & Workflows": {
        "COMM-001", "COMM-005", "EMAIL-002", "FORMS-001",
        "MR-106", "MR-107", "MR-209", "ORDERS-001", "TRACKING-003", "TRACKING-004",
    },
    "SaaS & Affiliates": {"COMM-001", "COMM-005"},
    "Calendars & Events": {"MR-101", "MR-103", "MR-104", "MR-164", "MR-165", "WEB-001"},
    "Media & Recordings": {
        "MR-001", "MR-007", "MR-140", "MR-141", "MR-142", "MR-143",
        "MR-144", "MR-145", "MR-146", "MR-163", "MR-220", "MR-225", "MR-220", "MR-225", "MR-220", "MR-225",
    },
    "Invoices & Documents": {"REPORT-002"},
    "Tasks & Helpdesk": {"MR-007"},
}

# Short board names let the product tabs remain readable.
VIEW_NAMES = {
    "Meeting Rooms": "Meeting Rooms",
    "Webinars": "Webinars",
    "Communities": "Communities",
    "Courses": "Courses",
    "AI Studio": "AI & AI Studio",
    "Email": "Email",
    "Funnels & Forms": "Funnels & Forms",
    "Checkout & Orders": "Checkout & Orders",
    "Tracking": "Tracking",
    "Reporting": "Reporting",
    "Platform & Builders": "Platform & Builders",
    "CRM & Workflows": "CRM & Workflows",
    "SaaS & Affiliates": "SaaS & Affiliates",
    "Calendars & Events": "Calendars & Events",
    "Media & Recordings": "Media & Recordings",
    "Invoices & Documents": "Invoices & Documents",
    "Tasks & Helpdesk": "Tasks & Helpdesk",
}

def areas_for(issue_id: str) -> list[str]:
    return [
        area for area, prefixes in AREA_TO_PREFIXES.items()
        if issue_id.startswith(prefixes) or issue_id in CROSS_AREA_IDS.get(area, set())
    ]

def label_for(area: str) -> str:
    return "Area: " + area

# Firestore Schema

## Users Collection
- id: string
- name: string
- email: string
- role: 'customer' | 'business'

## Ratings Collection
- id: string
- customerId: string (reference to Users)
- businessId: string (reference to Users)
- score: number (1-5)
- comment: string

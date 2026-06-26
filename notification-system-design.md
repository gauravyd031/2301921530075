# Notification System Design

Stage 1

APIs

* GET /api/notifications → Fetch notifications
* PATCH /api/notifications/:id/read → Mark one as read
* PATCH /api/notifications/read-all → Mark all as read

Auth: Authorization: Bearer <token>

Realtime: WebSocket (Socket.IO)

⸻

Stage 2

Database

* PostgreSQL
* Reliable, ACID compliant, supports indexing.

Schema

Column	Type
id	UUID
student_id	UUID
notification_type	ENUM
message	TEXT
is_read	BOOLEAN
created_at	TIMESTAMP

Queries

SELECT * FROM notifications
WHERE student_id=? AND is_read=false
ORDER BY created_at DESC;
UPDATE notifications
SET is_read=true
WHERE id=?;

Scaling

* Composite Index
* Partitioning
* Redis Cache

⸻

Stage 3

Problems:

* SELECT *
* Large table scan
* Missing composite index

Index:

CREATE INDEX idx_notifications
ON notifications(student_id,is_read,created_at DESC);

Placement notifications in last 7 days:

SELECT DISTINCT student_id
FROM notifications
WHERE notification_type='Placement'
AND created_at>=NOW()-INTERVAL '7 days';

⸻

Stage 4

Improve Performance

* Redis Cache
* Cache-first reads
* DB fallback
* Cache invalidation after updates

Trade-offs

* Faster reads
* Less DB load
* Extra memory
* Cache consistency required

⸻

Stage 5

Issues

* Sequential processing
* Email failure blocks execution
* Slow for 50,000 users

Solution

* Save notification
* Publish to Queue (RabbitMQ/Kafka)
* Worker sends Email & Push
* Retry failed jobs
* Dead Letter Queue

Pseudo:

Save Notification
↓
Publish Queue
↓
Worker
↓
Email + Push
↓
Retry if Failed

⸻

Stage 6

Priority Inbox

Priority:

* Placement = 3
* Result = 2
* Event = 1

Recent notifications get higher priority.

Maintain a Min-Heap of size 10.

Algorithm:

1. Calculate score.
2. Insert into heap.
3. Remove lowest if size >10.
4. Return heap contents.

Complexity: O(n log 10) ≈ O(n)
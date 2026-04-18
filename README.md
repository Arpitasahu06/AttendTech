🚀 Overview: 
 In traditional classrooms, 5–10 minutes are often spent taking attendance, reducing valuable teaching time—especially in large batches. This system addresses that inefficiency by automating attendance marking without teacher involvement.
It is specifically built for high-density digital learning environments such as coding bootcamps, training institutes, and tech labs where students actively use personal devices connected to a shared WiFi network.

⚙️ How It Works: 
 Each student registers a device (via MAC address) in the system
When the student connects to the classroom WiFi, the system:
Tracks connection duration
Monitors activity status
If the student remains connected for ≥ 75% of the session, attendance is automatically marked

🔐 Anti-Proxy Mechanisms: 
 To prevent misuse and proxy attendance, the system integrates multiple validation layers:
Device Binding – Only registered devices are allowed
Idle Detection – Auto-disconnect on inactivity (e.g., 10 minutes)
Re-authentication – Uses browser-based authentication (Web Authentication API) such as:
Fingerprint verification
Face recognition

📊 Key Features: 
 Fully automated attendance (no manual input required)
Real-time connection tracking
Attendance based on actual participation duration
Proxy attendance reduction
 Teacher-independent system

📈 Advanced Analytics (For Training Institutes): 
 Active session/coding time tracking
Student engagement monitoring
Connection duration analytics
Batch-level performance dashboard

🎯 Ideal Use Cases: 
 This system is best suited for:
Coding bootcamps
Data science / tech training institutes
Computer labs and digital classrooms
Corporate training environments
Not recommended for traditional classrooms where device usage is inconsistent.

💡 Benefits: 
  Saves classroom time
 Improves teaching efficiency
 Reduces proxy attendance
 Provides actionable student insights

🛠️ Tech Stack (example — update as per your project): 
 Frontend: React.js
Backend: Node.js / Express
Database: MongoDB
Networking: WiFi-based device tracking
Authentication: Web Authentication API

📌 Future Enhancements: 
 AI-based engagement analysis
Mobile app integration
Real-time alerts for low participation
Integration with LMS platforms

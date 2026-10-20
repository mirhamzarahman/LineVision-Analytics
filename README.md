# 📈 LineVision Analytics

A smart geometric pattern detection system that discovers the strongest linear relationships between data points.

---

## 🚀 Project Overview

LineVision Analytics is a data analysis tool designed to identify the maximum number of data points that follow the same linear trend.

The system analyzes coordinate-based datasets and detects hidden relationships by calculating patterns between different points.

This project demonstrates how mathematical concepts like slope calculation, normalization, and hashing can power real-world analytics systems.

---

## 🌍 Real-World Conceptual Scenario

Imagine a company analyzing:

- 📊 Stock market movement patterns
- 🛰 Satellite coordinate tracking
- 📍 Location-based activity trends
- 📈 Scientific experiment measurements

Large datasets often contain hidden linear relationships. LineVision Analytics helps discover the strongest alignment patterns automatically.

---

## 🧠 Core Concept

The project is based on:

- Coordinate relationship analysis
- Slope normalization
- Hash map frequency tracking
- Mathematical pattern detection

Instead of comparing every possible line directly, the system groups points by their relationship with a reference point.

---

# ⚙️ How The System Works

For every data point:

1. Select the point as the reference point.
2. Calculate the slope between this point and every other point.
3. Normalize slopes to avoid duplicate representations.
4. Store slope frequency using a hash map.
5. Find the most common slope pattern.
6. Return the largest detected linear group.

---

# 🧮 Algorithm & Data Structure

## Algorithm

**Normalized Slope Detection**

The slope between two points:

```
slope = (y2 - y1) / (x2 - x1)
```

is converted into a simplified ratio:

```
dy / dx
```

using the Greatest Common Divisor (GCD).

Example:

```
2/4 → 1/2
```

Both represent the same line direction.

---

## Data Structures Used

| Data Structure | Purpose |
|---|---|
| Hash Map | Stores slope frequency |
| Arrays | Stores coordinate data |
| Variables | Tracks maximum patterns |

---

# 🔄 Step-by-Step Logic

Example dataset:

```
[
 [1,1],
 [2,2],
 [3,3]
]
```

Process:

```
Reference Point: [1,1]

To [2,2]
Slope = 1/1

To [3,3]
Slope = 2/2 → normalized to 1/1


Frequency:

1/1 => 2 points
```

Total aligned points:

```
2 + reference point = 3
```

Result:

```
3 points are on the same line
```

---

# ✨ Key Features

✅ Detects strongest linear relationships  
✅ Efficient O(n²) analysis  
✅ Handles vertical and horizontal lines  
✅ Uses mathematical normalization  
✅ Memory-efficient pattern tracking  
✅ Clean modular implementation  

---

# 📌 Example Usage

## Input

```javascript
const dataset = [
  [1, 1],
  [2, 2],
  [3, 3]
];

console.log(findLargestLinearGroup(dataset));
```

## Output

```
3
```

---

Another example:

```javascript
[
 [1,1],
 [3,2],
 [5,3],
 [4,1],
 [2,3],
 [1,4]
]
```

Output:

```
4
```

---

# ⏱️ Performance Analysis

| Metric | Complexity |
|-|-|
| Time Complexity | O(n²) |
| Space Complexity | O(n) |

The system checks relationships between every pair of points while efficiently storing repeated patterns.

---

# 🛠 Technologies Used

- JavaScript (ES6+)
- Hash Map
- Mathematical Algorithms
- Data Structure Concepts

---

# 📂 Project Structure

```
LineVision-Analytics/
│
├── src/
│   └── lineVision.js
│
├── README.md
│
├── package.json
│
└── LICENSE
```

---

# ▶️ How To Run

### Clone Repository

```bash
git clone https://github.com/mirhamzarahman/LineVision-Analytics.git
```

### Navigate Into Project

```bash
cd LineVision-Analytics
```

### Run

```bash
node src/lineVision.js
```

---

# 📚 Learning Outcomes

Through this project, I learned:

- How to detect mathematical patterns in datasets
- How hashing improves search efficiency
- How normalization removes duplicate representations
- How geometry concepts apply to software systems
- How to design algorithm-based real-world solutions

---

# 🔮 Future Improvements

Possible enhancements:

- Add interactive coordinate visualization
- Build a web dashboard
- Support real-time streaming data
- Add machine learning trend prediction
- Export detected patterns as reports

---

# 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and improve this project.

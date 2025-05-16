

## 🧑‍💻 Candidate Search Application

This is a simple React-based GitHub candidate search application that allows users to browse potential candidates and curate a shortlist.

### ✨ Features

* 🔍 On page load, the app fetches and displays one GitHub user at a time, including:

  * Name
  * Username
  * Location
  * Avatar
  * Email (if available)
  * GitHub Profile URL
  * Company (if available)

* ➕ Clicking the **“+”** button saves the candidate to a list of potential candidates and moves to the next profile.

* ➖ Clicking the **“−”** button skips the current candidate and moves to the next one without saving.

* 🚫 If no candidates are left to review, a message is displayed to indicate the end of the queue.

### 💾 Persistence

* Saved candidates are stored in **localStorage**, so they persist across page reloads.
* On the **Saved Candidates** page, users can view their shortlist with full details.
* If no candidates have been saved, the page displays a friendly message to indicate an empty list.

### 🌐 Live Demo

You can try the live version here:
👉 [Deployed on Render](https://candidatesearch-mp6u.onrender.com)

> Replace the Render link above with your actual deployed URL.



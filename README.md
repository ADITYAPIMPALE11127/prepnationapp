# 🚀 PrepNation - React Native Expo App

### Important Notice
- **Don't merge anything directly**
- **Always run `npm i` before working on the project**
- **Always create a new branch and make a pull request**

PrepNation is a React Native mobile app built with **Expo**. This project helps provide an AI-driven interview experience.

---

## 📌 **Getting Started**

### **1. What You Need Before Starting**
Make sure you have these installed:

- **Node.js** (Latest LTS) → [Download](https://nodejs.org/)
- **Expo CLI** → Install it globally using:
  ```sh
  npm install -g expo-cli
  ```
- **Android Studio** (For running on an emulator) → [Download](https://developer.android.com/studio)
- **Git** → [Download](https://git-scm.com/)

---

### **2. Download the Project**
```sh
git clone https://github.com/your-username/prepnation.git
cd prepnation
```

---

## 🚀 **Run the App**

### **A. Run on Your Phone with Expo**
```sh
npm install   # Install necessary packages
npm start     # Start Expo development server
```
- This will open **Metro Bundler** in your browser.
- Scan the QR code with the **Expo Go** app on your phone to run the app.

---

### **B. Run on Android Emulator (Android Studio)**
1. Open **Android Studio** and start an **Android Emulator**.
2. In your project folder, run:
   ```sh
   npm run android
   ```
   or
   ```sh
   expo run:android
   ```
3. The app will now open in the emulator.

---

## 🗀 **How to Work with Branches (Don't Merge Directly)**

### **1. Create a New Branch**
```sh
git checkout -b feature-branch-name
```

### **2. Make Changes & Save Them**
```sh
git add .
git commit -m "Added a new feature"
```

### **3. Upload Your Changes to GitHub**
```sh
git push origin feature-branch-name
```

### **4. Submit Your Work for Review (Pull Request)**
- Go to your **GitHub repository** → **Pull Requests** → **New Pull Request**.
- Choose your **feature-branch-name** and request a merge into **main**.

---

## 📚 **How to Update Your Local Code with the Latest Master Changes**
### **1. Switch to the Main Branch**
```sh
git checkout master
```
### **2. Get the Latest Updates from GitHub**
```sh
git pull origin master
```
### **3. If You Have Unfinished Work, Save It First**
```sh
git stash
git pull origin master
```
Then restore your changes:
```sh
git stash pop
```
### **4. If You Need to Update Your Feature Branch with Master Changes**
```sh
git checkout feature-branch-name
git merge master
```

---

## 📄 **Best Practices**
✅ Always create a new branch for a feature.  
✅ Never push directly to `main`.  
✅ Use simple and clear commit messages.  
✅ Review and approve PRs before merging.  

---

## 🎯 **Want to Contribute?**
1. Fork the repo.
2. Create a feature branch.
3. Make changes and commit.
4. Push and create a pull request.

---

## 📝 **License**
This project is licensed under the **MIT License**.


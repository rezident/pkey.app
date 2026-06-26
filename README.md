# PKey.App 🗝️

[![Website](https://img.shields.io/badge/website-pkey.app-blue)](https://pkey.app)
![Status](https://img.shields.io/badge/status-in%20development-yellow)

[pkey.app](https://pkey.app) is a completely serverless, zero-knowledge, local-first password manager built as a Progressive Web App (PWA).

## 💡 The Philosophy: No Backend, No Tracking

We believe that your most sensitive data shouldn't be stored on somebody else's proprietary servers. PKey takes a radical approach: **There is no backend**.

PKey is a 100% client-side application. It consists only of static files running locally in your browser. All encryption, decryption, and data management happen securely on your device.

## ✨ Key Features (Planned & In Progress)

- 🔒 **True Zero-Knowledge**: Your vault is stored in your device's `IndexedDB`, encrypted with a key derived from your master password.
- 📱 **Mobile-First & Offline Ready**: Built as a PWA. Add it to your home screen, and it works perfectly offline. Desktop users get a responsive layout utilizing the extra screen space.
- ☁️ **Bring Your Own Storage**: Sync your encrypted vault across devices using WebDAV (for self-hosters) or official Cloud APIs (Google Drive, Yandex).
- 🔀 **Smart Merge**: If vault conflicts occur during sync, PKey resolves them seamlessly by comparing timestamps on a per-record basis.
- 🗂️ **Minimalist Data Model**: One database. Flat sections (tags) without complex folder hierarchies. A record can belong to multiple sections or none.
- 🕒 **Quick Access**: Keep the tab open and unlock your vault quickly with a PIN code.
- 🔑 **Built-in TOTP**: Support for Time-based One-Time Passwords (2FA codes) natively in the vault.

## 🛡️ Security Architecture

Building a secure frontend-only app requires modern web standards:
- **Key Derivation**: We use **Argon2id** (via WebAssembly) to derive a strong master key from your password, making brute-force attacks extremely difficult.
- **Encryption**: We use the native **WebCrypto API (AES-GCM)** for lightning-fast, military-grade encryption of your data.
- **Custom Format**: The vault is a proprietary encrypted JSON payload, ensuring maximum flexibility while maintaining a minimal file size for network sync.
- **Thread & Memory Isolation**: All heavy cryptography and database operations run off the main thread inside a dedicated **Web Worker** via a custom, zero-dependency RPC bridge. This keeps the UI perfectly smooth and isolates sensitive memory.

## 🛠️ Tech Stack

- **Framework**: React + TypeScript
- **State Management**: Zustand
- **Build Tool**: Vite
- **Architecture**: Web Workers (Custom strictly typed RPC bridge)
- **Crypto**: WebCrypto API + Argon2 (WASM)

## 🗺️ Roadmap

Currently, PKey is in the early stages of development. Here is the plan:

- [x] Initial setup (Vite, React, TS) and Web Worker RPC infrastructure.
- [ ] Implement Argon2 KDF (WASM) & AES-GCM encryption logic.
- [ ] IndexedDB storage engine & Local-first architecture.
- [ ] Minimalist UI/UX for mobile & desktop.
- [ ] Clipboard management & Quick PIN access.
- [ ] Export / Import tools (from popular password managers).
- [ ] Cloud Sync (WebDAV & Cloud REST APIs) & Conflict resolution (Merge).
- [ ] TOTP support.

## 🤍 Monetization & Honorware

PKey is an **Open Source** project. Anyone can clone the repository, run it, or host it on their own domain (since it's just static files).

To support the development, PKey operates on an **Honorware** model. Certain "Pro" features might be locked behind a voluntary sponsorship wall in the official `pkey.app` build. However, as it is open source, anyone is free to fork the repo and enable all features for themselves. Sponsoring is a way to say *Thank You* to the author, not a strict paywall.

## 🚀 Getting Started (For Developers)

```shell
# Clone the repository
git clone https://github.com/rezident/pkey.app.git

# Navigate to the project directory
cd pkey.app

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📄 License

[GNU Affero General Public License](./LICENSE)

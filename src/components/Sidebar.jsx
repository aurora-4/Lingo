import { useState } from "react";
import { CATEGORIES } from "../data/index";

export default function Sidebar({ activeCategory, onSelectCategory, mobileOpen, onClose }) {
    return (
        <>
            {mobileOpen && (
                <div className="sidebar-overlay visible" onClick={onClose} />
            )}
            <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <div className="logo">
                        <div className="logo-icon">🌿</div>
                        <div className="logo-text">Lingo</div>
                    </div>
                    <div className="logo-tagline">Learn spoken Telugu — no script required</div>
                </div>

                <nav className="sidebar-nav">
                    <div className="nav-label">Sections</div>
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            className={`nav-item ${activeCategory === cat.id ? "active" : ""}`}
                            onClick={() => { onSelectCategory(cat.id); onClose(); }}
                            style={activeCategory === cat.id ? { "--accent": cat.color } : {}}
                        >
                            <span className="nav-item-emoji">{cat.emoji}</span>
                            <div style={{ flex: 1, textAlign: "left" }}>
                                <div className="nav-item-text">{cat.label}</div>
                                <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "1px" }}>
                                    {cat.description}
                                </div>
                            </div>
                        </button>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="sidebar-footer-text">
                        All content in English transliteration 🔡<br />
                        No Telugu script — pronunciation first
                    </div>
                </div>
            </aside>
        </>
    );
}

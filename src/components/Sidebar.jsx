import { SECTIONS } from "../data/index";
import { useState, useEffect } from "react";

export default function Sidebar({ activeCategory, onSelectCategory, mobileOpen, onClose, onResetAll, onResetCategory }) {
    // Two-step confirm: null | "all" | categoryId
    const [confirmPending, setConfirmPending] = useState(null);

    // Auto-cancel pending confirm after 3 seconds
    useEffect(() => {
        if (!confirmPending) return;
        const t = setTimeout(() => setConfirmPending(null), 3000);
        return () => clearTimeout(t);
    }, [confirmPending]);

    const handleResetAllClick = () => {
        if (confirmPending === "all") {
            onResetAll?.();
            setConfirmPending(null);
        } else {
            setConfirmPending("all");
        }
    };

    const handleResetSectionClick = (e, catId) => {
        e.stopPropagation();
        if (confirmPending === catId) {
            onResetCategory?.(catId);
            setConfirmPending(null);
        } else {
            setConfirmPending(catId);
        }
    };

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
                    {SECTIONS.map((section) => (
                        <div key={section.id} className="nav-section">
                            {/* Section group header */}
                            <div className="nav-section-label">{section.label}</div>

                            {/* Categories within this section */}
                            {section.categories.map((cat) => {
                                const isActive = activeCategory === cat.id;
                                const sectionConfirmPending = confirmPending === cat.id;
                                return (
                                    <div
                                        key={cat.id}
                                        role="button"
                                        tabIndex={0}
                                        className={`nav-item ${isActive ? "active" : ""}`}
                                        onClick={() => { setConfirmPending(null); onSelectCategory(cat.id); onClose(); }}
                                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { onSelectCategory(cat.id); onClose(); } }}
                                        style={isActive ? { "--accent": cat.color } : {}}
                                    >
                                        <span className="nav-item-emoji">{cat.emoji}</span>
                                        <div style={{ flex: 1, textAlign: "left" }}>
                                            <div className="nav-item-text">{cat.label}</div>
                                            <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "1px" }}>
                                                {cat.description}
                                            </div>
                                        </div>
                                        {isActive && onResetCategory && (
                                            <button
                                                className={`reset-section-btn ${sectionConfirmPending ? "confirm" : ""}`}
                                                onClick={(e) => handleResetSectionClick(e, cat.id)}
                                                title={sectionConfirmPending ? "Tap again to confirm reset" : "Reset section progress"}
                                                aria-label="Reset section progress"
                                            >
                                                {sectionConfirmPending ? "?" : "↺"}
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="sidebar-footer-text">
                        All content in English transliteration 🔡<br />
                        No Telugu script — pronunciation first
                    </div>
                    {onResetAll && (
                        <button
                            className={`reset-all-btn ${confirmPending === "all" ? "confirm" : ""}`}
                            onClick={handleResetAllClick}
                        >
                            {confirmPending === "all" ? "Tap again to confirm" : "↺ Reset all progress"}
                        </button>
                    )}
                </div>
            </aside>
        </>
    );
}

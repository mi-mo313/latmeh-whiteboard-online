'use client';

import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';

export default function WhiteboardPage() {
    return (
        <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh' }}>
            {/* Overlay Header */}
            <header
                style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    zIndex: 500, // Keeps header above tldraw canvas controls
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    pointerEvents: 'auto',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
            >
                <span
                    style={{
                        fontWeight: 800,
                        fontSize: '1.1rem',
                        letterSpacing: '0.05em',
                        color: '#0f172a'
                    }}
                >
                    LATMEH
                </span>
                <span style={{ color: '#cbd5e1', fontWeight: 300 }}>|</span>
                <span
                    style={{
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        color: '#2563eb'
                    }}
                >
                    Whiteboard
                </span>
            </header>

            {/* tldraw Canvas */}
            <Tldraw persistenceKey="latmeh-whiteboard-state" />
        </div>
    );
}
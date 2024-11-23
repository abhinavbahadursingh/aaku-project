import './herobanner.css';

function Herobanner() {
    return (
        <div className="hero-section">
            <div className="background"></div>
            <div className="hero-overlay">
                <h1 className="hero-heading">Unfold Stories, Share Insights</h1>
                <p className="hero-description">Every book has a story, every reader has a voice.</p>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Ask me about my books..."
                        className="search-bar"
                    />
                </div>
            </div>
        </div>
    );
}

export default Herobanner;

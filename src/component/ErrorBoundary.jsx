import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
  
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
          <h1 className="text-[#1B1464] text-4xl font-black mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Something went wrong
          </h1>
          <p className="text-gray-500 mb-8 max-w-md">
            An unexpected error occurred. Please refresh the page or go back home.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => window.location.reload()}
              className="bg-[#1B1464] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#2d2a7a] transition-colors"
            >
              Refresh Page
            </button>
            <Link to="/"
              className="bg-[#F5A623] text-[#1B1464] font-semibold px-6 py-3 rounded-xl hover:bg-[#e09415] transition-colors">
              Go Home
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;   
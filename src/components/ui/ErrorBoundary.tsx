import { Component, ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; error?: Error; }

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error('CDN App Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: '#0d1225', color: 'white', padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '3rem', marginBottom: '1rem', color: '#c9a020' }}>CDN</div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Campus Discipleship Network</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Something went wrong loading the page.</p>
          <button
            onClick={() => { this.setState({ hasError: false }); window.location.href = '/'; }}
            style={{ background: '#c9a020', color: '#0d1225', border: 'none', padding: '0.75rem 2rem', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            Reload Site
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

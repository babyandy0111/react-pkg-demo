import React from "react"
import { createRoot } from 'react-dom/client';
import WidthAutoLabel from '../../src/index';
import './index.scss';

const App = () => {
    return (
        <div className="container">
            <WidthAutoLabel/>
        </div>
    );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

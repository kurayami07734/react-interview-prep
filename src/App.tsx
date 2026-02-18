import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';

import RenderingPuzzle01 from './topics/01-rendering-puzzles/Puzzle01';
import RenderingPuzzle02 from './topics/01-rendering-puzzles/Puzzle02';

import UseEffectPuzzle01 from './topics/02-useEffect-lifecycle/Puzzle01';
import UseEffectPuzzle02 from './topics/02-useEffect-lifecycle/Puzzle02';

import HooksPuzzle01 from './topics/03-hooks-advanced/Puzzle01';
import HooksPuzzle02 from './topics/03-hooks-advanced/Puzzle02';

import PerformancePuzzle01 from './topics/04-performance/Puzzle01';
import PerformancePuzzle02 from './topics/04-performance/Puzzle02';

import RefsPuzzle01 from './topics/05-refs-and-dom/Puzzle01';

import Stopwatch from './challenges/01-stopwatch';
import TodoList from './challenges/02-todo-list';
import StarRating from './challenges/03-star-rating';

const TOPICS = [
  { path: '/topics/01-rendering-puzzles', label: '01 Rendering Puzzles', puzzles: ['Puzzle01', 'Puzzle02'] },
  { path: '/topics/02-useEffect-lifecycle', label: '02 useEffect Lifecycle', puzzles: ['Puzzle01', 'Puzzle02'] },
  { path: '/topics/03-hooks-advanced', label: '03 Hooks Advanced', puzzles: ['Puzzle01', 'Puzzle02'] },
  { path: '/topics/04-performance', label: '04 Performance', puzzles: ['Puzzle01', 'Puzzle02'] },
  { path: '/topics/05-refs-and-dom', label: '05 Refs and DOM', puzzles: ['Puzzle01'] },
];

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={isActive ? 'active' : ''}>
      {children}
    </Link>
  );
}

function Home() {
  return (
    <div className="container">
      <h1>React Interview Prep</h1>
      <p>Master React fundamentals through hands-on practice.</p>
      
      <h2 style={{ marginTop: '30px' }}>Topics</h2>
      <div className="nav">
        {TOPICS.map(topic => (
          <NavLink key={topic.path} to={topic.path}>{topic.label}</NavLink>
        ))}
      </div>
      
      <h2 style={{ marginTop: '30px' }}>Challenges (Machine Coding)</h2>
      <div className="nav">
        <NavLink to="/challenges/01-stopwatch">01 Stopwatch</NavLink>
        <NavLink to="/challenges/02-todo-list">02 Todo List</NavLink>
        <NavLink to="/challenges/03-star-rating">03 Star Rating</NavLink>
      </div>
    </div>
  );
}

function TopicLayout({ title, puzzles }: { title: string; puzzles: { component: React.ComponentType; path: string }[] }) {
  return (
    <div className="container">
      <div className="topic-header">
        <Link to="/" style={{ textDecoration: 'none' }}>← Back</Link>
        <h1>{title}</h1>
      </div>
      
      <div className="nav">
        {puzzles.map((puzzle, idx) => (
          <NavLink key={idx} to={puzzle.path}>Puzzle{idx + 1}</NavLink>
        ))}
      </div>
      
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/01-rendering-puzzles" element={<TopicLayout title="01 Rendering Puzzles" puzzles={[
          { component: RenderingPuzzle01, path: 'puzzle01' },
          { component: RenderingPuzzle02, path: 'puzzle02' },
        ]} />}>
          <Route index element={
            <div>
              <h3>Select a puzzle to practice:</h3>
              <div style={{ margin: '10px 0' }}><Link to="puzzle01">Puzzle1</Link></div>
              <div style={{ margin: '10px 0' }}><Link to="puzzle02">Puzzle2</Link></div>
            </div>
          } />
          <Route path="puzzle01" element={<RenderingPuzzle01 />} />
          <Route path="puzzle02" element={<RenderingPuzzle02 />} />
        </Route>
        <Route path="/topics/02-useEffect-lifecycle" element={<TopicLayout title="02 useEffect Lifecycle" puzzles={[
          { component: UseEffectPuzzle01, path: 'puzzle01' },
          { component: UseEffectPuzzle02, path: 'puzzle02' },
        ]} />}>
          <Route index element={
            <div>
              <h3>Select a puzzle to practice:</h3>
              <div style={{ margin: '10px 0' }}><Link to="puzzle01">Puzzle1</Link></div>
              <div style={{ margin: '10px 0' }}><Link to="puzzle02">Puzzle2</Link></div>
            </div>
          } />
          <Route path="puzzle01" element={<UseEffectPuzzle01 />} />
          <Route path="puzzle02" element={<UseEffectPuzzle02 />} />
        </Route>
        <Route path="/topics/03-hooks-advanced" element={<TopicLayout title="03 Hooks Advanced" puzzles={[
          { component: HooksPuzzle01, path: 'puzzle01' },
          { component: HooksPuzzle02, path: 'puzzle02' },
        ]} />}>
          <Route index element={
            <div>
              <h3>Select a puzzle to practice:</h3>
              <div style={{ margin: '10px 0' }}><Link to="puzzle01">Puzzle1</Link></div>
              <div style={{ margin: '10px 0' }}><Link to="puzzle02">Puzzle2</Link></div>
            </div>
          } />
          <Route path="puzzle01" element={<HooksPuzzle01 />} />
          <Route path="puzzle02" element={<HooksPuzzle02 />} />
        </Route>
        <Route path="/topics/04-performance" element={<TopicLayout title="04 Performance" puzzles={[
          { component: PerformancePuzzle01, path: 'puzzle01' },
          { component: PerformancePuzzle02, path: 'puzzle02' },
        ]} />}>
          <Route index element={
            <div>
              <h3>Select a puzzle to practice:</h3>
              <div style={{ margin: '10px 0' }}><Link to="puzzle01">Puzzle1</Link></div>
              <div style={{ margin: '10px 0' }}><Link to="puzzle02">Puzzle2</Link></div>
            </div>
          } />
          <Route path="puzzle01" element={<PerformancePuzzle01 />} />
          <Route path="puzzle02" element={<PerformancePuzzle02 />} />
        </Route>
        <Route path="/topics/05-refs-and-dom" element={<TopicLayout title="05 Refs and DOM" puzzles={[
          { component: RefsPuzzle01, path: 'puzzle01' },
        ]} />}>
          <Route index element={
            <div>
              <h3>Select a puzzle to practice:</h3>
              <div style={{ margin: '10px 0' }}><Link to="puzzle01">Puzzle1</Link></div>
            </div>
          } />
          <Route path="puzzle01" element={<RefsPuzzle01 />} />
        </Route>
        <Route path="/challenges/01-stopwatch" element={<Stopwatch />} />
        <Route path="/challenges/02-todo-list" element={<TodoList />} />
        <Route path="/challenges/03-star-rating" element={<StarRating />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

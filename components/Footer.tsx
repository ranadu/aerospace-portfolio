import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 py-8 dark:border-zinc-800">
      <Container>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Robert Anadu</p>
          <p className="mt-1">Controls • Simulation • Hardware • Software</p>
        </div>
      </Container>
    </footer>
  );
}
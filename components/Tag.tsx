export default function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
      {label}
    </span>
  );
}
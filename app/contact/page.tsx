// import Container from "@/components/Container";

// export default function ContactPage() {
//   return (
//     <Container>
//       <div className="space-y-6">
//         <h1 className="text-2xl font-semibold">Contact</h1>

//         <p className="text-zinc-600 dark:text-zinc-300">
//           Interested in collaboration, interviews, or engineering discussions.
//         </p>

//         <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
//           <p>
//             <strong>Email:</strong>{" "}
//             <a
//               href="mailto:robanadu@gmail.com"
//               className="underline"
//             >
//               robanadu@gmail.com
//             </a>
//           </p>
//           <p>
//             <strong>GitHub:</strong>{" "}
//             <a
//               href="https://github.com/ranadu"
//               target="_blank"
//               rel="noreferrer"
//               className="underline"
//             >
//               github.com/ranadu
//             </a>
//           </p>
//           <p>
//             <strong>LinkedIn:</strong>{" "}
//             <a
//               href="https://www.linkedin.com/in/ranadu16"
//               target="_blank"
//               rel="noreferrer"
//               className="underline"
//             >
//               linkedin.com/in/ranadu16
//             </a>
//           </p>
//         </div>
//       </div>
//     </Container>
//   );
// }

import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <Container>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Contact</h1>

        <p className="text-zinc-600 dark:text-zinc-300">
          Interested in collaboration, interviews, or engineering discussions.
        </p>

        <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:youremail@example.com" className="underline">
              youremail@example.com
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/ranadu"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              github.com/ranadu
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              linkedin.com/in/yourprofile
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}
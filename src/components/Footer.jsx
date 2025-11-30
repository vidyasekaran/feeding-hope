export default function Footer() {
  return (
    <footer className="py-4 bg-dark text-white text-center" id="contact">
      <p className="mb-1">© {new Date().getFullYear()} Feeding Hope</p>
      <p className="small text-white-50">
        Serving Humanity. One Meal at a Time.
      </p>
    </footer>
  );
}

import Link from "next/link";
const mockUrls = ["https://ugyoetgt7l.ufs.sh/f/4b1SB4pqXKxQ8HGAjtaFqe25SdjGPfZWyzYMTB7moVaUNCK9", "https://ugyoetgt7l.ufs.sh/f/4b1SB4pqXKxQV6jrMfLELeBQ61YowP0W9IyhujGx2OiNKzT3", "https://ugyoetgt7l.ufs.sh/f/4b1SB4pqXKxQol2XZL7OBl97aPeACFVMZ4id20Q1JjKm35IH"]
const mockImages = mockUrls.map((url,index) => ({
        id: index + 1,
        url,
     }));
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
    <div className="flex flex-wrap gap-4">{
    mockImages.map((image) => (
      <div key = {image.id} className = "w-48">
        <img src={image.url} alt="image" />
      </div>
    ))
}
</div>
    </main>
  );
}

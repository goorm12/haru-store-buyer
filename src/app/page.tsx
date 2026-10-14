export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-stone-50 px-6">
      <section className="w-full max-w-lg rounded-3xl border border-stone-200 bg-white p-8">
        <p className="mb-3 text-sm font-medium text-stone-500">Haru Store</p>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">하루상점</h1>
        <p className="mt-4 text-lg text-stone-600">좋아하는 상점의 공동구매</p>
        <p className="mt-6 text-sm leading-6 text-stone-500">
          상점의 상품을 예약하고, 방문해서 결제와 픽업을 할 수 있는 서비스를 준비하고 있어요.
        </p>
      </section>
    </main>
  );
}

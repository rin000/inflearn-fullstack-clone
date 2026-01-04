import { notFound } from 'next/navigation';
import EditCourseHeader from './_components/edit-course-header';
import * as api from '@/lib/api';
import EditCourseSidebar from './_components/edit-course-sidebar';

export default async function EditCurseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await api.getCourseById(id);

  if (course.error || !course.data) {
    notFound();
  }

  return (
    <div className="w-full h-full bg-[#f1f3f5]">
      <EditCourseHeader course={course.data} />
      <div className="p-12 flex gap-12 min-h-screen max-w-5xl">
        <EditCourseSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

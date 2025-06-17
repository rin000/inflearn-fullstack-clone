'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import * as api from '@/lib/api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function UI() {
  const router = useRouter();
  const [title, setTitle] = useState('');

  const createCourseMutation = useMutation({
    mutationFn: () => api.CreateCourse(title),
    onSuccess: (res) => {
      if (res.data && !res.error) {
        router.push(`/course/${res.data.id}/edit/course_info`);
      }
      if (res.error) {
        toast.error(res.error as string);
      }
    },
  });

  return (
    <div className="max-w-xl mx-auto w-full h-[90vh] flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl text-center font-bold">
        제목을 입력해주세요! <br />
        너무 고민하지마세요. 제목은 언제든 수정 가능해요
      </h2>
      <Input
        className="bg-[#f6f6f6] py-6 rounded-xs"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력해주세요"
      />
      <div className="space-x-2">
        <Button className="px-8 py-6 text-md font-bold" variant={'outline'}>
          이전
        </Button>
        <Button
          className="px-8 py-6 text-md font-bold"
          variant={'default'}
          onClick={() => createCourseMutation.mutate()}
        >
          만들기
        </Button>
      </div>
    </div>
  );
}

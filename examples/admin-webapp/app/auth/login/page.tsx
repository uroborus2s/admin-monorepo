import { Metadata } from 'next';
import UserAuthForm from '@/components/forms/user-auth-form';
import backgroundImg from '@/public/mainbg.png';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

export default function AuthenticationPage() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <div className="flex items-center justify-center min-h-screen bg-opacity-60">
        <div className="px-8 py-6 mt-4 text-left bg-transparent">
          <div className='metal-text'>车辆维修系统</div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}

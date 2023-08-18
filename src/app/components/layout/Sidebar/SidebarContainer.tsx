import { Navbar } from '../Navbar';
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  HomeIcon,
  DocumentMagnifyingGlassIcon,
  Squares2X2Icon,
  PhoneIcon,
  CpuChipIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';

export function SidebarContainer() {
  return (
    <ul className='space-y-2 font-medium'>
      <Navbar.Root>
        <Navbar.Link link='#'>
          <Navbar.Icon icon={MagnifyingGlassIcon} />
          <Navbar.Placeholder text='Search...' />
        </Navbar.Link>
      </Navbar.Root>
      <Navbar.Root>
        <Navbar.Link link='#'>
          <Navbar.Icon icon={HomeIcon} />
          <Navbar.Placeholder text='Tela Inicial' />
        </Navbar.Link>
      </Navbar.Root>
      <Navbar.Root>
        <Navbar.Link link='#'>
          <Navbar.Icon icon={ChartBarIcon} />
          <Navbar.Placeholder text='Texto' />
        </Navbar.Link>
      </Navbar.Root>
      <Navbar.Root>
        <Navbar.Link link='#'>
          <Navbar.Icon icon={CpuChipIcon} />
          <Navbar.Placeholder text='Texto' />
        </Navbar.Link>
      </Navbar.Root>
      <Navbar.Root>
        <Navbar.Link link='#'>
          <Navbar.Icon icon={DocumentMagnifyingGlassIcon} />
          <Navbar.Placeholder text='Texto' />
        </Navbar.Link>
      </Navbar.Root>
      <Navbar.Root>
        <Navbar.Link link='#'>
          <Navbar.Icon icon={Squares2X2Icon} />
          <Navbar.Placeholder text='Texto' />
        </Navbar.Link>
      </Navbar.Root>
      <Navbar.Root>
        <Navbar.Link link='#'>
          <Navbar.Icon icon={FunnelIcon} />
          <Navbar.Placeholder text='Texto' />
        </Navbar.Link>
      </Navbar.Root>
      <Navbar.Root>
        <Navbar.Link link='#'>
          <Navbar.Icon icon={PhoneIcon} />
          <Navbar.Placeholder text='Texto' />
        </Navbar.Link>
      </Navbar.Root>
    </ul>
  );
}

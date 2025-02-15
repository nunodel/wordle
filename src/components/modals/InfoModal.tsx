import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Cell } from '../grid/Cell'
import { XCircleIcon } from '@heroicons/react/outline'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div className="absolute right-4 top-4">
                <XCircleIcon
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => handleClose()}
                />
              </div>
              <div>
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Joga oinsaa
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Ita bele koko dala 6 atu siik WORDLE. Depois kada koko, letra nia kor troka hodi hatudu se ita nia siik besik liafuan sekretu.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="K" status="correct" />
                      <Cell value="I" />
                      <Cell value="N" />
                      <Cell value="U" />
                      <Cell value="R" />
                    </div>
                    <p className="text-sm text-gray-500">
                      Letra K iha liafuan sekretu iha pozisaun loos.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="H" />
                      <Cell value="E" />
                      <Cell value="T" status="present" />
                      <Cell value="A" />
                      <Cell value="N" />
                    </div>
                    <p className="text-sm text-gray-500">
                      Letra T iha liafuan sekretu maibee pozisaun sala.
                    </p>

                    <div className="flex justify-center mb-1 mt-4">
                      <Cell value="F" />
                      <Cell value="I" />
                      <Cell value="T" />
                      <Cell value="U" status="absent" />
                      <Cell value="N" />
                    </div>
                    <p className="text-sm text-gray-500">
                      Letra U laos iha liafuan sekretu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
